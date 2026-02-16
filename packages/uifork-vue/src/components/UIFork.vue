<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import type { UIForkProps, VersionInfo } from '../types'
import type { ActiveView } from '../types'
import styles from './UIFork.module.css'
import ComponentSelector from './ComponentSelector.vue'
import VersionsList from './VersionsList.vue'
import SettingsView from './SettingsView.vue'
import EmptyStateNoComponents from './EmptyStateNoComponents.vue'
import NewVersionButton from './NewVersionButton.vue'
import OfflineMessage from './OfflineMessage.vue'
import TriggerContent from './TriggerContent.vue'
import ChevronRightIcon from './icons/ChevronRightIcon.vue'
import CheckmarkIcon from './icons/CheckmarkIcon.vue'
import InfoIcon from './icons/InfoIcon.vue'

import { useWebSocketConnection } from '../composables/useWebSocketConnection'
import { useComponentDiscovery } from '../composables/useComponentDiscovery'
import { useVersionManagement } from '../composables/useVersionManagement'
import { usePopoverPosition } from '../composables/usePopoverPosition'
import { useClickOutside } from '../composables/useClickOutside'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useVersionKeyboardShortcuts, useDropdownKeyboard } from '../composables/useKeyboardShortcuts'
import { useDragToCorner } from '../composables/useDragToCorner'
import { useContainerPositioning } from '../composables/useContainerPositioning'
import type { Position } from '../utils/positioning'
import { isDevelopment } from '../utils/environment'
import { getParentInfo, isComponentMounted } from '../utils/componentRegistry'

const props = withDefaults(defineProps<UIForkProps>(), {
  port: 3030,
  className: '',
})

const isMounted = ref(false)

// UI state
const isOpen = ref(false)
const isComponentSelectorOpen = ref(false)
const isSettingsOpen = ref(false)
const openPopoverVersion = ref<string | null>(null)
const copied = ref(false)

// Refs
const rootRef = ref<HTMLDivElement | null>(null)
const triggerRef = ref<HTMLButtonElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const dropdownRef = ref<HTMLDivElement | null>(null)
// Settings
const [theme, setTheme] = useLocalStorage<'light' | 'dark' | 'system'>('uifork-theme', 'system')
const [position, setPosition] = useLocalStorage<Position>('uifork-position', 'bottom-right')
const [codeEditor, setCodeEditor] = useLocalStorage<'vscode' | 'cursor'>('uifork-code-editor', 'vscode')

// Container positioning
const { containerPosition, transformOrigin } = useContainerPositioning({
  position,
  isComponentSelectorOpen,
  containerRef,
})

// Drag to corner
const { isDragging, resetDrag, handlePointerDown } = useDragToCorner({
  isOpen,
  containerRef,
  setPosition,
})

// Component discovery
const { mountedComponents, allKnownComponents, selectedComponent, setSelectedComponent, onComponentsUpdate } =
  useComponentDiscovery({ port: props.port })

// Current component versions — use allKnownComponents so we can show versions
// even for components not currently mounted (e.g. ContactCard inside HomePage.v1)
const currentComponent = computed(() =>
  allKnownComponents.value.find((c) => c.name === selectedComponent.value),
)
const versions = computed<VersionInfo[]>(() => currentComponent.value?.versions || [])

const getVersionLabel = (key: string): string | undefined =>
  versions.value.find((v) => v.key === key)?.label

const COMPONENT_VERSION_STORAGE_PREFIX = 'uifork-component-'

// Smart switching: when selecting a component that's not mounted,
// auto-switch its parent to the version that contains it
watch(selectedComponent, (componentName) => {
  if (!componentName) return
  if (isComponentMounted(componentName)) return

  const parentInfo = getParentInfo(componentName)
  if (!parentInfo) return

  // Switch the parent to the version that contains this child
  const parentKey = `${COMPONENT_VERSION_STORAGE_PREFIX}${parentInfo.id}`
  const parentVersion = JSON.stringify(parentInfo.version)
  window.localStorage.setItem(parentKey, parentVersion)
  window.dispatchEvent(
    new StorageEvent('storage', { key: parentKey, newValue: parentVersion }),
  )
})

// Version management
const {
  activeVersion,
  setActiveVersion,
  editingVersion,
  renameValue,
  startRename,
  confirmRename,
  cancelRename,
  clearEditingOnError,
  storePendingVersion,
  versionKeys,
} = useVersionManagement({
  selectedComponent: () => selectedComponent.value,
  versions: () => versions.value,
})

// WebSocket
const { connectionStatus, sendMessage } = useWebSocketConnection({
  port: props.port,
  selectedComponent: () => selectedComponent.value,
  onComponentsUpdate,
  onVersionAck: ({ version, message, newVersion }) => {
    let versionToActivate: string | null = null
    if (message?.includes('duplicated') || message?.includes('created new version')) {
      versionToActivate = version
    } else if (message?.includes('renamed') && newVersion) {
      versionToActivate = newVersion
    }
    if (versionToActivate) storePendingVersion(versionToActivate)
  },
  onPromoted: (promotedComponent) => {
    const storedValue = localStorage.getItem('uifork-selected-component')
    const storedComponent = storedValue ? JSON.parse(storedValue) : null
    const currentSelected = selectedComponent.value

    if (currentSelected === promotedComponent || storedComponent === promotedComponent) {
      localStorage.removeItem('uifork-selected-component')
      setSelectedComponent('')
      const ensureRemoval = () => {
        const stored = localStorage.getItem('uifork-selected-component')
        if (stored) {
          try {
            const parsed = JSON.parse(stored)
            if (parsed === promotedComponent) localStorage.removeItem('uifork-selected-component')
          } catch {
            if (stored === promotedComponent) localStorage.removeItem('uifork-selected-component')
          }
        }
      }
      ensureRemoval()
      setTimeout(ensureRemoval, 0)
      setTimeout(ensureRemoval, 50)
      setTimeout(ensureRemoval, 100)
    }
  },
  onError: clearEditingOnError,
})

// Popover positioning
const { popoverPositions, setPopoverTriggerRef, setPopoverDropdownRef } = usePopoverPosition({
  openPopoverVersion,
})

// Keyboard shortcuts
useVersionKeyboardShortcuts({
  versionKeys: () => versionKeys.value,
  activeVersion,
  setActiveVersion,
  mountedComponents: () => mountedComponents.value,
  selectedComponent,
  setSelectedComponent,
})

useDropdownKeyboard({
  isOpen,
  triggerRef,
  openPopoverVersion,
  isComponentSelectorOpen,
  editingVersion,
  onClosePopover: () => (openPopoverVersion.value = null),
  onCloseComponentSelector: () => (isComponentSelectorOpen.value = false),
  onCancelRename: cancelRename,
  onClose: () => {
    isOpen.value = false
    isSettingsOpen.value = false
  },
})

// Click outside
useClickOutside({
  isActive: isOpen,
  refs: [triggerRef, containerRef],
  onClickOutside: () => {
    if (editingVersion.value) cancelRename()
    isOpen.value = false
    isSettingsOpen.value = false
    isComponentSelectorOpen.value = false
  },
  additionalCheck: (target: Node) => {
    const popoverElements = document.querySelectorAll('[data-popover-dropdown]')
    for (const el of popoverElements) {
      if (el.contains(target)) return true
    }
    return false
  },
})

// Mount effect - create root element
onMounted(() => {
  isMounted.value = true
  nextTick(() => {
    let rootEl = document.getElementById('uifork-root') as HTMLDivElement | null
    if (!rootEl) {
      rootEl = document.createElement('div')
      rootEl.id = 'uifork-root'
      rootEl.className = styles.uiforkRoot || 'uiforkRoot'
      document.body.appendChild(rootEl)
    }
    rootRef.value = rootEl
    rootEl.setAttribute('data-theme', theme.value)
  })
})

// Update theme
watch(theme, (t) => {
  const rootEl = document.getElementById('uifork-root')
  if (rootEl) rootEl.setAttribute('data-theme', t)
})

const isConnected = computed(() => connectionStatus.value === 'connected')

// Active view
const activeView = computed<ActiveView>(() => {
  if (!isOpen.value) {
    const hasComponents = allKnownComponents.value.length > 0
    return hasComponents ? 'closed-trigger-label' : 'closed-trigger-icon'
  }
  if (isComponentSelectorOpen.value) return 'opened-component-selector'
  if (isSettingsOpen.value) return 'opened-settings'
  if (allKnownComponents.value.length === 0) return 'opened-no-components'
  return 'opened-version-list'
})

// Action handlers
function handleDuplicateVersion(version: string, e: MouseEvent) {
  e.stopPropagation()
  sendMessage('duplicate_version', { version })
}

function handleDeleteVersion(version: string, e: MouseEvent) {
  e.stopPropagation()
  sendMessage('delete_version', { version })
}

function handleNewVersion(e: MouseEvent) {
  e.stopPropagation()
  sendMessage('new_version', {})
}

function handleRenameVersion(version: string, e: MouseEvent) {
  e.stopPropagation()
  startRename(version)
}

function handleConfirmRename(version: string) {
  const newLabel = confirmRename(version)
  if (newLabel !== null) {
    sendMessage('rename_label', { version, newLabel })
  }
}

function handlePromoteVersion(version: string, e: MouseEvent) {
  e.stopPropagation()
  const label = getVersionLabel(version) || formatVersionLabel(version)
  if (
    window.confirm(
      `Are you sure you want to promote version ${label}?\n\nThis will:\n- Replace the main component with this version\n- Remove all versioning scaffolding\n- This action cannot be undone`,
    )
  ) {
    sendMessage('promote_version', { version })
    openPopoverVersion.value = null
  }
}

function handleTogglePopover(version: string, e?: MouseEvent) {
  e?.stopPropagation()
  openPopoverVersion.value = openPopoverVersion.value === version ? null : version
}

async function handleOpenInEditor(version: string, e: MouseEvent) {
  e.stopPropagation()
  try {
    const response = await fetch(`http://localhost:${props.port}/open-in-editor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        version,
        component: selectedComponent.value,
        editor: codeEditor.value,
      }),
    })
    if (!response.ok) await response.json()
  } catch {
    // Error opening in editor
  }
  openPopoverVersion.value = null
}

function formatVersionLabel(version: string) {
  return version.replace(/^v/, 'V').replace(/_/g, '.')
}

async function handleCopyCommand() {
  const command = 'npx uifork-vue  '
  try {
    await navigator.clipboard.writeText(command)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Failed to copy
  }
}

function handleTriggerClick(e: MouseEvent) {
  if (isDragging.value) {
    e.preventDefault()
    return
  }
  isOpen.value = true
  isSettingsOpen.value = false
}
</script>

<template>
  <Teleport to="#uifork-root" v-if="isMounted && rootRef">
    <div
      ref="containerRef"
      :class="[styles.container, !isOpen ? styles.containerClosed : '', props.className]"
      :style="{
        borderRadius: isOpen ? '12px' : '16px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        ...containerPosition,
        transformOrigin,
        touchAction: !isOpen ? 'none' : 'auto',
        transition: 'border-radius 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), top 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), right 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), bottom 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02), left 0.3s cubic-bezier(0.04, 1.02, 0.13, 1.02)',
        ...props.style,
      }"
      @pointerdown="handlePointerDown"
    >
      <!-- Closed trigger -->
      <button
        v-if="activeView === 'closed-trigger-icon' || activeView === 'closed-trigger-label'"
        ref="triggerRef"
        @click="handleTriggerClick"
        aria-label="Select UI version"
        :aria-expanded="false"
        aria-haspopup="listbox"
        :class="[
          styles.trigger,
          !selectedComponent || versions.length === 0 ? styles.triggerIconOnly : '',
        ]"
        :draggable="false"
      >
        <TriggerContent
          :has-selection="!!selectedComponent && versions.length > 0"
          :selected-component="selectedComponent"
          :active-version="activeVersion"
          :active-version-label="getVersionLabel(activeVersion)"
          :format-version-label="formatVersionLabel"
        />
      </button>

      <!-- Open dropdown -->
      <div
        v-else
        ref="dropdownRef"
        role="listbox"
        aria-label="UI version options"
        :class="styles.dropdown"
      >
        <EmptyStateNoComponents
          v-if="activeView === 'opened-no-components'"
          :copied="copied"
          @copy-command="handleCopyCommand"
        />

        <SettingsView
          v-if="activeView === 'opened-settings'"
          :theme="theme"
          :position="position"
          :code-editor="codeEditor"
          @back="isSettingsOpen = false"
          @update:theme="setTheme"
          @update:position="setPosition"
          @update:code-editor="setCodeEditor"
        />

        <!-- Inline component selector (like settings) -->
        <div v-if="activeView === 'opened-component-selector'" :class="styles.settingsView">
          <button
            @click="isComponentSelectorOpen = false"
            :class="styles.settingsBackButton"
            :style="{ width: 'auto', alignSelf: 'flex-start' }"
          >
            <ChevronRightIcon :class="styles.settingsBackIcon" />
            <span>Back</span>
          </button>
          <div :class="styles.componentSelectorDropdownTitle" :style="{ padding: '4px 8px' }">Forked components</div>
          <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 4px' }">
            <button
              v-for="component in allKnownComponents"
              :key="component.name"
              @click="setSelectedComponent(component.name); isComponentSelectorOpen = false"
              :class="[
                styles.componentSelectorItem,
                styles.menuItem,
                component.name === selectedComponent ? styles.componentSelectorItemSelected : '',
              ]"
            >
              <div :class="styles.componentSelectorItemCheckmarkContainer">
                <CheckmarkIcon v-if="component.name === selectedComponent" :class="styles.componentSelectorItemCheckmark" />
              </div>
              <span :class="styles.componentSelectorItemName">{{ component.name }}</span>
              <span :class="styles.componentSelectorItemCount">{{ component.versions.length }}</span>
            </button>
          </div>
          <div v-if="isConnected" :class="styles.componentSelectorDropdownHint" :style="{ padding: '8px 12px' }">
            <InfoIcon :class="styles.componentSelectorDropdownHintIcon" />
            <span>
              Use <code :class="styles.componentSelectorDropdownHintCode">npx uifork-vue init</code> to
              iterate on more components
            </span>
          </div>
        </div>

        <template v-if="activeView === 'opened-version-list'">
          <ComponentSelector
            :selected-component="selectedComponent"
            @toggle="isComponentSelectorOpen = !isComponentSelectorOpen"
            @settings-click="(e: MouseEvent) => { e.stopPropagation(); isSettingsOpen = true }"
          />

          <div :class="styles.divider" />

          <VersionsList
            :versions="versions"
            :active-version="activeVersion"
            :editing-version="editingVersion"
            :rename-value="renameValue"
            :format-version-label="formatVersionLabel"
            :open-popover-version="openPopoverVersion"
            :popover-positions="popoverPositions"
            :is-connected="isConnected"
            @select-version="(v: string) => setActiveVersion(v)"
            @duplicate-version="handleDuplicateVersion"
            @toggle-popover="handleTogglePopover"
            @promote-version="handlePromoteVersion"
            @open-in-editor="handleOpenInEditor"
            @delete-version="handleDeleteVersion"
            @rename-version="handleRenameVersion"
            @rename-value-change="(v: string) => (renameValue = v)"
            @confirm-rename="handleConfirmRename"
            @cancel-rename="cancelRename"
            @set-popover-trigger-ref="setPopoverTriggerRef"
            @set-popover-dropdown-ref="setPopoverDropdownRef"
          />

          <template v-if="isDevelopment()">
            <div :class="styles.divider" />
            <NewVersionButton v-if="isConnected" @click="handleNewVersion" />
            <OfflineMessage v-else />
          </template>
        </template>
      </div>
    </div>

  </Teleport>
</template>
