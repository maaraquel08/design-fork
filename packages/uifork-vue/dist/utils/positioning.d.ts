export type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export interface ContainerPosition {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}
/**
 * Calculates the CSS position styles for a container based on its corner position.
 */
export declare function getContainerPosition(position: Position, offset?: number): ContainerPosition;
/**
 * Gets the CSS transform-origin value based on the corner position.
 */
export declare function getTransformOrigin(position: Position): string;
//# sourceMappingURL=positioning.d.ts.map