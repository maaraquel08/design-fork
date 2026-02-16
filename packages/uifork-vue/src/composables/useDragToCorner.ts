import { ref, watch, onMounted, onUnmounted, type Ref } from "vue";
import type { Position } from "../utils/positioning";

const ANIMATION_DURATION = 0.3;

interface UseDragToCornerOptions {
  isOpen: Ref<boolean>;
  containerRef: Ref<HTMLDivElement | null>;
  setPosition: (position: Position) => void;
}

/**
 * Composable to handle dragging a container element and snapping it to the nearest corner.
 * Uses native pointer events instead of Framer Motion drag.
 */
export function useDragToCorner({
  isOpen,
  containerRef,
  setPosition,
}: UseDragToCornerOptions) {
  const isDragging = ref(false);
  const resetDrag = ref(false);

  const DRAG_THRESHOLD = 5;

  let pointerStart: { x: number; y: number } | null = null;
  let dragEnabled = false;
  let startTranslateX = 0;
  let startTranslateY = 0;
  let currentTranslateX = 0;
  let currentTranslateY = 0;

  function getNearestCorner(x: number, y: number): Position {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (x < centerX && y < centerY) return "top-left";
    if (x >= centerX && y < centerY) return "top-right";
    if (x < centerX && y >= centerY) return "bottom-left";
    return "bottom-right";
  }

  function handlePointerDown(e: PointerEvent) {
    if (isOpen.value) return;
    pointerStart = { x: e.clientX, y: e.clientY };
    dragEnabled = false;
    startTranslateX = currentTranslateX;
    startTranslateY = currentTranslateY;

    if (containerRef.value) {
      containerRef.value.setAttribute("data-drag-tracking", "true");
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  }

  function handlePointerMove(e: PointerEvent) {
    if (!pointerStart || isOpen.value) return;

    const deltaX = e.clientX - pointerStart.x;
    const deltaY = e.clientY - pointerStart.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance > DRAG_THRESHOLD && !dragEnabled) {
      dragEnabled = true;
      isDragging.value = true;
      resetDrag.value = false;
      document.body.style.setProperty("cursor", "grabbing", "important");
      document.body.style.userSelect = "none";
      if (containerRef.value) {
        containerRef.value.style.setProperty("cursor", "grabbing", "important");
        containerRef.value.setAttribute("data-dragging", "true");
      }
    }

    if (dragEnabled && containerRef.value) {
      currentTranslateX = startTranslateX + deltaX;
      currentTranslateY = startTranslateY + deltaY;
      containerRef.value.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px)`;
    }
  }

  function handlePointerUp() {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);

    if (!dragEnabled) {
      pointerStart = null;
      document.body.style.removeProperty("cursor");
      if (containerRef.value) {
        containerRef.value.style.removeProperty("cursor");
        containerRef.value.removeAttribute("data-drag-tracking");
      }
      return;
    }

    isDragging.value = false;
    document.body.style.removeProperty("cursor");
    document.body.style.userSelect = "";
    if (containerRef.value) {
      containerRef.value.style.removeProperty("cursor");
      containerRef.value.removeAttribute("data-drag-tracking");
      containerRef.value.removeAttribute("data-dragging");
    }

    // Snap to nearest corner
    if (containerRef.value) {
      const rect = containerRef.value.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const nearestCorner = getNearestCorner(centerX, centerY);
      setPosition(nearestCorner);

      // Reset transform
      containerRef.value.style.transform = "";
      currentTranslateX = 0;
      currentTranslateY = 0;
      resetDrag.value = true;

      setTimeout(() => {
        resetDrag.value = false;
      }, ANIMATION_DURATION * 1000 + 50);
    }

    pointerStart = null;
    dragEnabled = false;
  }

  // Cleanup on open state change
  watch(isOpen, (open) => {
    if (open && (isDragging.value || dragEnabled)) {
      isDragging.value = false;
      dragEnabled = false;
      pointerStart = null;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  });

  onUnmounted(() => {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    document.body.style.removeProperty("cursor");
    document.body.style.userSelect = "";
    if (containerRef.value) {
      containerRef.value.style.removeProperty("cursor");
      containerRef.value.removeAttribute("data-drag-tracking");
      containerRef.value.removeAttribute("data-dragging");
    }
  });

  return {
    isDragging,
    resetDrag,
    handlePointerDown,
  };
}
