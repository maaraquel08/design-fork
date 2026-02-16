import { computed, type Ref } from "vue";
import {
  getContainerPosition,
  getTransformOrigin,
  type Position,
  type ContainerPosition,
} from "../utils/positioning";

interface UseContainerPositioningProps {
  position: Ref<Position>;
  isComponentSelectorOpen: Ref<boolean>;
  containerRef: Ref<HTMLDivElement | null>;
}

export function useContainerPositioning({
  position,
}: UseContainerPositioningProps) {
  const containerPosition = computed<ContainerPosition>(() =>
    getContainerPosition(position.value),
  );

  const transformOrigin = computed(() => getTransformOrigin(position.value));

  return {
    containerPosition,
    transformOrigin,
  };
}
