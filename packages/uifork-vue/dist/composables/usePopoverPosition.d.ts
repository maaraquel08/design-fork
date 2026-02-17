import { Ref } from 'vue';
interface UsePopoverPositionOptions {
    openPopoverVersion: Ref<string | null>;
}
export declare function usePopoverPosition({ openPopoverVersion }: UsePopoverPositionOptions): {
    popoverPositions: Map<string, {
        x: number;
        y: number;
    }>;
    setPopoverTriggerRef: (version: string, el: HTMLButtonElement | null) => void;
    setPopoverDropdownRef: (version: string, el: HTMLDivElement | null) => void;
};
export {};
//# sourceMappingURL=usePopoverPosition.d.ts.map