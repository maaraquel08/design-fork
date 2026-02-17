import { Ref } from 'vue';
import { Position } from '../utils/positioning';
interface UseDragToCornerOptions {
    isOpen: Ref<boolean>;
    containerRef: Ref<HTMLDivElement | null>;
    setPosition: (position: Position) => void;
}
/**
 * Composable to handle dragging a container element and snapping it to the nearest corner.
 * Uses native pointer events instead of Framer Motion drag.
 */
export declare function useDragToCorner({ isOpen, containerRef, setPosition, }: UseDragToCornerOptions): {
    isDragging: Ref<boolean, boolean>;
    resetDrag: Ref<boolean, boolean>;
    handlePointerDown: (e: PointerEvent) => void;
};
export {};
//# sourceMappingURL=useDragToCorner.d.ts.map