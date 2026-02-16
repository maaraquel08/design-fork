import { ref, watch, computed, onUnmounted } from "vue";
import type { VersionInfo } from "../types";

const COMPONENT_VERSION_STORAGE_PREFIX = "uifork-component-";

interface UseVersionManagementOptions {
  selectedComponent: () => string;
  versions: () => VersionInfo[];
}

export function useVersionManagement({
  selectedComponent,
  versions,
}: UseVersionManagementOptions) {
  const versionKeys = computed(() => versions().map((v) => v.key));

  const storageKey = computed(
    () => `${COMPONENT_VERSION_STORAGE_PREFIX}${selectedComponent() || "uifork-default"}`,
  );

  // Use a plain ref instead of useLocalStorage to avoid stale-key bugs.
  // The storage key changes whenever the selected component changes, so we
  // manage reads/writes manually against the current key.
  const activeVersion = ref<string>(readVersion(storageKey.value));

  function readVersion(key: string): string {
    if (typeof window === "undefined") return "";
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : "";
    } catch {
      return "";
    }
  }

  function writeVersion(key: string, value: string) {
    if (typeof window === "undefined") return;
    try {
      if (value === "") {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
      // Sync across tabs and to ForkedComponent instances
      window.dispatchEvent(
        new StorageEvent("storage", {
          key,
          newValue: value === "" ? null : JSON.stringify(value),
        }),
      );
    } catch {
      // Error writing to localStorage
    }
  }

  function setActiveVersion(value: string | ((val: string) => string)) {
    const newVal = value instanceof Function ? value(activeVersion.value) : value;
    activeVersion.value = newVal;
    writeVersion(storageKey.value, newVal);
  }

  // When the selected component changes, read its stored version
  watch(storageKey, (newKey) => {
    activeVersion.value = readVersion(newKey);
  });

  // Listen for cross-tab storage changes for the current key
  let storageHandler: ((e: StorageEvent) => void) | null = null;
  if (typeof window !== "undefined") {
    storageHandler = (e: StorageEvent) => {
      if (e.key === storageKey.value && e.newValue) {
        try {
          activeVersion.value = JSON.parse(e.newValue);
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener("storage", storageHandler);
  }

  onUnmounted(() => {
    if (storageHandler) {
      window.removeEventListener("storage", storageHandler);
    }
  });

  const editingVersion = ref<string | null>(null);
  const renameValue = ref("");

  // Initialization and pending version check
  watch(
    [() => selectedComponent(), versionKeys, activeVersion],
    ([comp, keys, active]) => {
      if (comp && keys.length > 0) {
        const pendingKey = `${COMPONENT_VERSION_STORAGE_PREFIX}${comp}-pending-version`;
        const pendingVersion = localStorage.getItem(pendingKey);

        if (pendingVersion && keys.includes(pendingVersion)) {
          setActiveVersion(pendingVersion);
          localStorage.removeItem(pendingKey);
        } else if (!keys.includes(active)) {
          const componentKey = `${COMPONENT_VERSION_STORAGE_PREFIX}${comp}`;
          const savedVersion = localStorage.getItem(componentKey);
          const parsedVersion = savedVersion ? JSON.parse(savedVersion) : null;

          if (parsedVersion && keys.includes(parsedVersion)) {
            setActiveVersion(parsedVersion);
          } else {
            setActiveVersion(keys[0]);
          }
        }
      }
    },
    { immediate: true },
  );

  function storePendingVersion(version: string) {
    const pendingKey = `${COMPONENT_VERSION_STORAGE_PREFIX}${selectedComponent()}-pending-version`;
    localStorage.setItem(pendingKey, version);
  }

  function getVersionLabel(key: string): string | undefined {
    return versions().find((v) => v.key === key)?.label;
  }

  function startRename(version: string) {
    editingVersion.value = version;
    const currentLabel = getVersionLabel(version) || "";
    renameValue.value = currentLabel;
  }

  function confirmRename(version: string): string | null {
    const newLabel = renameValue.value.trim();
    const currentLabel = getVersionLabel(version) || "";

    if (newLabel === currentLabel) {
      editingVersion.value = null;
      renameValue.value = "";
      return null;
    }

    editingVersion.value = null;
    renameValue.value = "";
    return newLabel;
  }

  function cancelRename() {
    editingVersion.value = null;
    renameValue.value = "";
  }

  function clearEditingOnError() {
    if (editingVersion.value) {
      editingVersion.value = null;
      renameValue.value = "";
    }
  }

  return {
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
  };
}
