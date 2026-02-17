type __VLS_Props = {
    version: string;
    value: string;
    formatVersionLabel: (version: string) => string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    cancel: () => any;
    "update:value": (value: string) => any;
    confirm: (version: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    "onUpdate:value"?: ((value: string) => any) | undefined;
    onConfirm?: ((version: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputComp: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue: string;
        placeholder?: string;
        class?: string;
        containerStyle?: Record<string, string>;
    }> & Readonly<{
        onClick?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (e: MouseEvent) => any;
        keydown: (e: KeyboardEvent) => any;
        "update:modelValue": (value: string) => any;
    }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        measureRef: HTMLSpanElement;
        inputRef: HTMLInputElement;
    }, HTMLSpanElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue: string;
        placeholder?: string;
        class?: string;
        containerStyle?: Record<string, string>;
    }> & Readonly<{
        onClick?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        inputRef: import('vue').Ref<HTMLInputElement | null, HTMLInputElement | null>;
    }, {}, {}, {}, {}> | null;
}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=VersionNameEditor.vue.d.ts.map