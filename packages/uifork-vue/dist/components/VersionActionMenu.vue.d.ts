type __VLS_Props = {
    version: string;
    label?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    delete: (version: string, e: MouseEvent) => any;
    close: () => any;
    promote: (version: string, e: MouseEvent) => any;
    openInEditor: (version: string, e: MouseEvent) => any;
    rename: (version: string, e: MouseEvent) => any;
    setDropdownRef: (el: HTMLDivElement | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDelete?: ((version: string, e: MouseEvent) => any) | undefined;
    onClose?: (() => any) | undefined;
    onPromote?: ((version: string, e: MouseEvent) => any) | undefined;
    onOpenInEditor?: ((version: string, e: MouseEvent) => any) | undefined;
    onRename?: ((version: string, e: MouseEvent) => any) | undefined;
    onSetDropdownRef?: ((el: HTMLDivElement | null) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropdownRef: HTMLDivElement;
}, any>;
export default _default;
//# sourceMappingURL=VersionActionMenu.vue.d.ts.map