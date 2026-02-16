import { ref, watch, onMounted, onUnmounted, type Ref } from "vue";

/**
 * Composable for persisting state in localStorage with optional cross-tab synchronization.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  syncAcrossTabs = false,
): [Ref<T>, (value: T | ((val: T) => T)) => void] {
  const storedValue = ref<T>(readFromStorage()) as Ref<T>;

  function readFromStorage(): T {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  }

  function setValue(value: T | ((val: T) => T)) {
    try {
      const valueToStore = value instanceof Function ? value(storedValue.value) : value;
      storedValue.value = valueToStore;
      if (typeof window !== "undefined") {
        if (valueToStore === "" && typeof initialValue === "string") {
          window.localStorage.removeItem(key);
          if (syncAcrossTabs) {
            window.dispatchEvent(
              new StorageEvent("storage", { key, newValue: null }),
            );
          }
        } else {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
          if (syncAcrossTabs) {
            window.dispatchEvent(
              new StorageEvent("storage", { key, newValue: JSON.stringify(valueToStore) }),
            );
          }
        }
      }
    } catch {
      // Error setting localStorage key
    }
  }

  if (syncAcrossTabs && typeof window !== "undefined") {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          storedValue.value = JSON.parse(e.newValue);
        } catch {
          // Error parsing localStorage value
        }
      }
    };

    onMounted(() => {
      window.addEventListener("storage", handleStorageChange);
    });

    onUnmounted(() => {
      window.removeEventListener("storage", handleStorageChange);
    });
  }

  return [storedValue, setValue];
}
