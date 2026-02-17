type __VLS_Props = {
    modelValue: string;
    placeholder?: string;
    class?: string;
    containerStyle?: Record<string, string>;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => any;
    keydown: (e: KeyboardEvent) => any;
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
    onKeydown?: ((e: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    measureRef: HTMLSpanElement;
    inputRef: HTMLInputElement;
}, HTMLSpanElement>;
export default _default;
//# sourceMappingURL=AutoWidthInput.vue.d.ts.map