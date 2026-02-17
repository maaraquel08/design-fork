import { Ref } from 'vue';
import { Position, ContainerPosition } from '../utils/positioning';
interface UseContainerPositioningProps {
    position: Ref<Position>;
    isComponentSelectorOpen: Ref<boolean>;
    containerRef: Ref<HTMLDivElement | null>;
}
export declare function useContainerPositioning({ position, }: UseContainerPositioningProps): {
    containerPosition: import('vue').ComputedRef<ContainerPosition>;
    transformOrigin: import('vue').ComputedRef<string>;
};
export {};
//# sourceMappingURL=useContainerPositioning.d.ts.map