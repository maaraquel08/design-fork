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
export function getContainerPosition(
  position: Position,
  offset: number = 20,
): ContainerPosition {
  const positions: Record<Position, ContainerPosition> = {
    "top-left": {
      top: `${offset}px`,
      left: `${offset}px`,
      bottom: "auto",
      right: "auto",
    },
    "top-right": {
      top: `${offset}px`,
      right: `${offset}px`,
      bottom: "auto",
      left: "auto",
    },
    "bottom-left": {
      bottom: `${offset}px`,
      left: `${offset}px`,
      top: "auto",
      right: "auto",
    },
    "bottom-right": {
      bottom: `${offset}px`,
      right: `${offset}px`,
      top: "auto",
      left: "auto",
    },
  };
  return positions[position];
}

/**
 * Gets the CSS transform-origin value based on the corner position.
 */
export function getTransformOrigin(position: Position): string {
  const origins: Record<Position, string> = {
    "top-left": "top left",
    "top-right": "top right",
    "bottom-left": "bottom left",
    "bottom-right": "bottom right",
  };
  return origins[position];
}
