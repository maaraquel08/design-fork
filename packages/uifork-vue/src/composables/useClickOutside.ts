import { watch, onUnmounted, type Ref } from "vue";

interface UseClickOutsideOptions {
  isActive: Ref<boolean> | (() => boolean);
  refs: Ref<HTMLElement | null>[];
  onClickOutside: () => void;
  additionalCheck?: (target: Node) => boolean;
}

/**
 * Composable to handle clicks outside of specified elements
 */
export function useClickOutside({
  isActive,
  refs,
  onClickOutside,
  additionalCheck,
}: UseClickOutsideOptions) {
  let handler: ((e: MouseEvent) => void) | null = null;

  const getActive = () =>
    typeof isActive === "function" ? isActive() : isActive.value;

  watch(
    () => getActive(),
    (active) => {
      if (handler) {
        document.removeEventListener("mousedown", handler);
        handler = null;
      }
      if (!active) return;

      handler = (e: MouseEvent) => {
        const target = e.target as Node;

        for (const r of refs) {
          if (r.value?.contains(target)) return;
        }

        if (additionalCheck?.(target)) return;

        onClickOutside();
      };
      document.addEventListener("mousedown", handler);
    },
    { immediate: true },
  );

  onUnmounted(() => {
    if (handler) {
      document.removeEventListener("mousedown", handler);
    }
  });
}
