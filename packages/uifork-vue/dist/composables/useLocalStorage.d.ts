import { Ref } from 'vue';
/**
 * Composable for persisting state in localStorage with optional cross-tab synchronization.
 */
export declare function useLocalStorage<T>(key: string, initialValue: T, syncAcrossTabs?: boolean): [Ref<T>, (value: T | ((val: T) => T)) => void];
//# sourceMappingURL=useLocalStorage.d.ts.map