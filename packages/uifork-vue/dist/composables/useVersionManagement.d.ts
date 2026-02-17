import { VersionInfo } from '../types';
interface UseVersionManagementOptions {
    selectedComponent: () => string;
    versions: () => VersionInfo[];
}
export declare function useVersionManagement({ selectedComponent, versions, }: UseVersionManagementOptions): {
    activeVersion: import('vue').Ref<string, string>;
    setActiveVersion: (value: string | ((val: string) => string)) => void;
    editingVersion: import('vue').Ref<string | null, string | null>;
    renameValue: import('vue').Ref<string, string>;
    startRename: (version: string) => void;
    confirmRename: (version: string) => string | null;
    cancelRename: () => void;
    clearEditingOnError: () => void;
    storePendingVersion: (version: string) => void;
    versionKeys: import('vue').ComputedRef<string[]>;
};
export {};
//# sourceMappingURL=useVersionManagement.d.ts.map