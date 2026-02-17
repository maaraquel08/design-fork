type __VLS_Props = {
    version: string;
    label?: string;
    isSelected: boolean;
    formatVersionLabel: (version: string) => string;
    isPopoverOpen: boolean;
    isConnected: boolean;
    isDevelopment: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (version: string) => any;
    delete: (version: string, e: MouseEvent) => any;
    promote: (version: string, e: MouseEvent) => any;
    openInEditor: (version: string, e: MouseEvent) => any;
    rename: (version: string, e: MouseEvent) => any;
    duplicate: (version: string, e: MouseEvent) => any;
    togglePopover: (version: string, e?: MouseEvent | undefined) => any;
    setPopoverTriggerRef: (version: string, el: HTMLButtonElement | null) => any;
    setPopoverDropdownRef: (version: string, el: HTMLDivElement | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((version: string) => any) | undefined;
    onDelete?: ((version: string, e: MouseEvent) => any) | undefined;
    onPromote?: ((version: string, e: MouseEvent) => any) | undefined;
    onOpenInEditor?: ((version: string, e: MouseEvent) => any) | undefined;
    onRename?: ((version: string, e: MouseEvent) => any) | undefined;
    onDuplicate?: ((version: string, e: MouseEvent) => any) | undefined;
    onTogglePopover?: ((version: string, e?: MouseEvent | undefined) => any) | undefined;
    onSetPopoverTriggerRef?: ((version: string, el: HTMLButtonElement | null) => any) | undefined;
    onSetPopoverDropdownRef?: ((version: string, el: HTMLDivElement | null) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=VersionItem.vue.d.ts.map