import { Ref } from 'vue';
import { ComponentInfo } from '../types';
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
export declare function useVersionKeyboardShortcuts({ versionKeys, activeVersion, setActiveVersion, mountedComponents, selectedComponent, setSelectedComponent, }: UseVersionKeyboardShortcutsOptions): void;
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
export declare function useDropdownKeyboard({ isOpen, triggerRef, openPopoverVersion, isComponentSelectorOpen, editingVersion, onClosePopover, onCloseComponentSelector, onCancelRename, onClose, }: UseDropdownKeyboardOptions): void;
export {};
//# sourceMappingURL=useKeyboardShortcuts.d.ts.map