import { watch, onMounted, onUnmounted, type Ref } from "vue";
import type { ComponentInfo } from "../types";

interface UseVersionKeyboardShortcutsOptions {
  versionKeys: () => string[];
  activeVersion: Ref<string>;
  setActiveVersion: (version: string) => void;
  /** All mounted components for cross-component navigation */
  mountedComponents: () => ComponentInfo[];
  selectedComponent: Ref<string>;
  setSelectedComponent: (name: string) => void;
}

/**
 * Composable for Cmd/Ctrl+Arrow keyboard shortcuts to switch versions.
 * When at the edge of one component's versions, wraps to the next/previous
 * mounted component automatically.
 */
export function useVersionKeyboardShortcuts({
  versionKeys,
  activeVersion,
  setActiveVersion,
  mountedComponents,
  selectedComponent,
  setSelectedComponent,
}: UseVersionKeyboardShortcutsOptions) {
  function handleKeyDown(e: KeyboardEvent) {
    if (!e.metaKey && !e.ctrlKey) return;
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

    const keys = versionKeys();
    const components = mountedComponents();
    if (components.length === 0) return;

    e.preventDefault();

    const currentIndex = keys.indexOf(activeVersion.value);

    if (e.key === "ArrowUp") {
      // Navigate to next version (higher index)
      const nextIndex = currentIndex + 1;
      if (nextIndex < keys.length) {
        setActiveVersion(keys[nextIndex]);
      } else if (components.length > 1) {
        // At the end — wrap to next component's first version
        const compIndex = components.findIndex((c) => c.name === selectedComponent.value);
        const nextCompIndex = (compIndex + 1) % components.length;
        const nextComp = components[nextCompIndex];
        setSelectedComponent(nextComp.name);
      }
    }

    if (e.key === "ArrowDown") {
      // Navigate to previous version (lower index)
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        setActiveVersion(keys[prevIndex]);
      } else if (components.length > 1) {
        // At the beginning — wrap to previous component's last version
        const compIndex = components.findIndex((c) => c.name === selectedComponent.value);
        const prevCompIndex = (compIndex - 1 + components.length) % components.length;
        const prevComp = components[prevCompIndex];
        setSelectedComponent(prevComp.name);
      }
    }
  }

  onMounted(() => {
    window.addEventListener("keydown", handleKeyDown, { capture: true });
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown, { capture: true } as any);
  });
}

interface UseDropdownKeyboardOptions {
  isOpen: Ref<boolean>;
  triggerRef: Ref<HTMLButtonElement | null>;
  openPopoverVersion: Ref<string | null>;
  isComponentSelectorOpen: Ref<boolean>;
  editingVersion: Ref<string | null>;
  onClosePopover: () => void;
  onCloseComponentSelector: () => void;
  onCancelRename: () => void;
  onClose: () => void;
}

/**
 * Composable for dropdown keyboard navigation (Escape to close)
 */
export function useDropdownKeyboard({
  isOpen,
  triggerRef,
  openPopoverVersion,
  isComponentSelectorOpen,
  editingVersion,
  onClosePopover,
  onCloseComponentSelector,
  onCancelRename,
  onClose,
}: UseDropdownKeyboardOptions) {
  let handler: ((e: KeyboardEvent) => void) | null = null;

  watch(
    isOpen,
    (open) => {
      if (handler) {
        document.removeEventListener("keydown", handler);
        handler = null;
      }
      if (!open) return;

      handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          if (openPopoverVersion.value) {
            onClosePopover();
            return;
          }
          if (isComponentSelectorOpen.value) {
            onCloseComponentSelector();
            return;
          }
          if (editingVersion.value) {
            onCancelRename();
            return;
          }
          onClose();
          triggerRef.value?.focus();
        }
      };
      document.addEventListener("keydown", handler);
    },
    { immediate: true },
  );

  onUnmounted(() => {
    if (handler) {
      document.removeEventListener("keydown", handler);
    }
  });
}
