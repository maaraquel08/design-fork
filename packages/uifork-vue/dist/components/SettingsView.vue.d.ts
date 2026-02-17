type __VLS_Props = {
    theme: 'light' | 'dark' | 'system';
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    codeEditor: 'vscode' | 'cursor';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    back: () => any;
    "update:theme": (value: "light" | "dark" | "system") => any;
    "update:position": (value: "top-left" | "top-right" | "bottom-left" | "bottom-right") => any;
    "update:codeEditor": (value: "vscode" | "cursor") => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onBack?: (() => any) | undefined;
    "onUpdate:theme"?: ((value: "light" | "dark" | "system") => any) | undefined;
    "onUpdate:position"?: ((value: "top-left" | "top-right" | "bottom-left" | "bottom-right") => any) | undefined;
    "onUpdate:codeEditor"?: ((value: "vscode" | "cursor") => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=SettingsView.vue.d.ts.map