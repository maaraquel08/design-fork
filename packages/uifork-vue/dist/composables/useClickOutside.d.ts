import { Ref } from 'vue';
interface UseClickOutsideOptions {
    isActive: Ref<boolean> | (() => boolean);
    refs: Ref<HTMLElement | null>[];
    onClickOutside: () => void;
    additionalCheck?: (target: Node) => boolean;
}
/**
 * Composable to handle clicks outside of specified elements
 */
export declare function useClickOutside({ isActive, refs, onClickOutside, additionalCheck, }: UseClickOutsideOptions): void;
export {};
//# sourceMappingURL=useClickOutside.d.ts.map