import { VersionInfo } from '../types';
type __VLS_Props = {
    versions: VersionInfo[];
    activeVersion: string;
    editingVersion: string | null;
    renameValue: string;
    formatVersionLabel: (version: string) => string;
    openPopoverVersion: string | null;
    popoverPositions: Map<string, {
        x: number;
        y: number;
    }>;
    isConnected: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    openInEditor: (version: string, e: MouseEvent) => any;
    togglePopover: (version: string, e?: MouseEvent | undefined) => any;
    setPopoverTriggerRef: (version: string, el: HTMLButtonElement | null) => any;
    setPopoverDropdownRef: (version: string, el: HTMLDivElement | null) => any;
    selectVersion: (version: string) => any;
    duplicateVersion: (version: string, e: MouseEvent) => any;
    promoteVersion: (version: string, e: MouseEvent) => any;
    deleteVersion: (version: string, e: MouseEvent) => any;
    renameVersion: (version: string, e: MouseEvent) => any;
    renameValueChange: (value: string) => any;
    confirmRename: (version: string) => any;
    cancelRename: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpenInEditor?: ((version: string, e: MouseEvent) => any) | undefined;
    onTogglePopover?: ((version: string, e?: MouseEvent | undefined) => any) | undefined;
    onSetPopoverTriggerRef?: ((version: string, el: HTMLButtonElement | null) => any) | undefined;
    onSetPopoverDropdownRef?: ((version: string, el: HTMLDivElement | null) => any) | undefined;
    onSelectVersion?: ((version: string) => any) | undefined;
    onDuplicateVersion?: ((version: string, e: MouseEvent) => any) | undefined;
    onPromoteVersion?: ((version: string, e: MouseEvent) => any) | undefined;
    onDeleteVersion?: ((version: string, e: MouseEvent) => any) | undefined;
    onRenameVersion?: ((version: string, e: MouseEvent) => any) | undefined;
    onRenameValueChange?: ((value: string) => any) | undefined;
    onConfirmRename?: ((version: string) => any) | undefined;
    onCancelRename?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=VersionsList.vue.d.ts.map