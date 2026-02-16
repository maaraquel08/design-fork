import { watch, onUnmounted, type Ref } from "vue";
import { autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
import styles from "../components/UIFork.module.css";

interface UsePopoverPositionOptions {
  openPopoverVersion: Ref<string | null>;
}

export function usePopoverPosition({ openPopoverVersion }: UsePopoverPositionOptions) {
  const popoverTriggerRefs = new Map<string, HTMLButtonElement>();
  const popoverDropdownRefs = new Map<string, HTMLDivElement>();
  const popoverPositions = new Map<string, { x: number; y: number }>();

  let cleanup: (() => void) | null = null;
  let frameId: number | null = null;

  watch(openPopoverVersion, (version) => {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    if (!version) return;

    let cancelled = false;

    const setupPositioning = () => {
      const trigger = popoverTriggerRefs.get(version);
      const dropdown = popoverDropdownRefs.get(version);

      if (!trigger || !dropdown) {
        if (!cancelled) {
          frameId = requestAnimationFrame(setupPositioning);
        }
        return;
      }

      const updatePosition = async () => {
        if (cancelled) return;
        try {
          const { x, y } = await computePosition(trigger, dropdown, {
            placement: "bottom-end",
            strategy: "fixed",
            middleware: [
              offset(4),
              flip({ fallbackPlacements: ["bottom-start", "top-end", "top-start"] }),
              shift({ padding: 8 }),
            ],
          });
          if (!cancelled) {
            popoverPositions.set(version, { x, y });
            dropdown.style.left = `${x}px`;
            dropdown.style.top = `${y}px`;
            dropdown.style.visibility = "visible";
            dropdown.classList.add(styles.popoverVisible);
          }
        } catch {
          // Error positioning popover
        }
      };

      dropdown.style.visibility = "hidden";
      updatePosition();
      cleanup = autoUpdate(trigger, dropdown, updatePosition);
    };

    frameId = requestAnimationFrame(setupPositioning);

    // Set cleanup for when version changes
    cleanup = () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      const dropdown = popoverDropdownRefs.get(version);
      if (dropdown) dropdown.classList.remove(styles.popoverVisible);
    };
  });

  onUnmounted(() => {
    if (cleanup) cleanup();
    if (frameId) cancelAnimationFrame(frameId);
  });

  function setPopoverTriggerRef(version: string, el: HTMLButtonElement | null) {
    if (el) popoverTriggerRefs.set(version, el);
    else popoverTriggerRefs.delete(version);
  }

  function setPopoverDropdownRef(version: string, el: HTMLDivElement | null) {
    if (el) popoverDropdownRefs.set(version, el);
    else popoverDropdownRefs.delete(version);
  }

  return {
    popoverPositions,
    setPopoverTriggerRef,
    setPopoverDropdownRef,
  };
}
