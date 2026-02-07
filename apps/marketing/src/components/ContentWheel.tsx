import {
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const easing = "cubic-bezier(.27,.01,0,1)";

/** Per-character fade-in with staggered delay. Used when animating in the active item. */
function CharacterFadeIn({
  text,
  activeIndex,
  charDelayMs = 40,
  fadeDurationMs = 180,
}: {
  text: string;
  activeIndex: number;
  charDelayMs?: number;
  fadeDurationMs?: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, [activeIndex]);

  return (
    <span style={{ display: "inline-block" }}>
      {Array.from(text).map((char, i) => (
        <span
          key={`${activeIndex}-${i}-${char}`}
          style={{
            opacity: visible ? 1 : 0,
            transition: `opacity ${fadeDurationMs}ms ${easing} ${i * charDelayMs}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export type ContentWheelProps<T = ReactNode> = {
  items: T[];
  /** Render function for each item. distance is 0 when facing camera, 1 when facing away */
  renderItem?: (
    item: T,
    distance: number,
    context?: { itemIndex: number; activeIndex: number },
  ) => ReactNode;
  /** Circle radius in px (distance from center to label plane) */
  radius?: number;
  /**
   * Total span of the wheel in degrees used to space items evenly.
   * Example: 360 = full circle, 180 = half circle.
   * Each item is placed step = wheelSpanDeg / items.length apart.
   */
  wheelSpanDeg?: number;
  /** Index of the item to center (can be any number, allowing continuous rotation) */
  activeIndex?: number;
  /** Whether to show items when rotated away from the viewer */
  showBackface?: boolean;
  /** Transition duration for rotation in milliseconds */
  transitionDuration?: number;
  /** Direction of rotation through items */
  direction?: "up" | "down";
  /**
   * Horizontal alignment of items. When rotating to the next item, the aligned
   * edge stays fixed (e.g. "left" keeps the left edge in place).
   * @default "center"
   */
  alignment?: "left" | "center" | "right";
};

/**
 * Measures a set of refs and returns an array of sizes.
 */

function useItemMeasurements(count: number, deps: unknown[] = []) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [sizes, setSizes] = useState<Array<{ width: number; height: number }>>(() =>
    Array.from({ length: count }, () => ({ width: 0, height: 0 })),
  );

  // Ensure refs array length tracks count
  if (refs.current.length !== count) {
    refs.current = Array.from({ length: count }, (_, i) => refs.current[i] ?? null);
  }

  // Initial synchronous measure (avoids first-frame jump)
  useLayoutEffect(() => {
    const next = refs.current.map((el) => {
      if (!el) return { width: 0, height: 0 };
      const rect = el.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    });
    setSizes(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  // Observe subsequent resizes
  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      const map = new Map<Element, ResizeObserverEntry>();
      entries.forEach((e) => map.set(e.target, e));
      setSizes((prev) =>
        prev.map((old, i) => {
          const el = refs.current[i];
          if (!el) return old;
          const entry = map.get(el);
          if (!entry) return old;
          const cr = entry.contentRect;
          if (cr.width === old.width && cr.height === old.height) return old;
          return { width: cr.width, height: cr.height };
        }),
      );
    });
    refs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [count]);

  return { refs, sizes };
}

export function ContentWheel<T extends ReactNode>({
  items,
  renderItem,
  radius = 50,
  wheelSpanDeg = 360,
  activeIndex = 0,
  showBackface = false,
  transitionDuration = 200,
  direction = "up",
  alignment = "center",
}: ContentWheelProps<T>) {
  const itemCount = items.length;

  // Calculate parameters for the wheel
  const { stepRad, startDeg, spinDeg, zOffset } = useMemo(() => {
    const stepRad = (wheelSpanDeg * Math.PI) / 180 / itemCount;
    const startRad = -0.5 * (itemCount - 1) * stepRad;
    const startDeg = (startRad * 180) / Math.PI;

    const degreesPerItem = wheelSpanDeg / itemCount;
    const rotationMultiplier = direction === "up" ? 1 : -1;
    // offset so item 0 faces forward at activeIndex = 0
    const offsetDeg = (0.5 * (itemCount - 1) * wheelSpanDeg) / itemCount;
    const spinDeg = rotationMultiplier * activeIndex * degreesPerItem + offsetDeg;

    return {
      stepRad,
      startDeg,
      spinDeg,
      zOffset: -radius,
    };
  }, [itemCount, wheelSpanDeg, direction, activeIndex, radius]);

  // We do some subtle index mapping to translate the original item's index to
  // the position where we render it on the wheel. This ensures that we always
  // increment through the items in the correct direction.
  // down: [0,1,2,3,...]
  // up:   [0,n-1,n-2,...,1]
  const wheelIndexFromOriginal = useCallback(
    (orig: number) => {
      if (direction === "down" || itemCount <= 1) return orig;
      return orig === 0 ? 0 : itemCount - orig;
    },
    [direction, itemCount],
  );

  const { refs: measureRefs, sizes } = useItemMeasurements(
    itemCount,
    // Re-measure if items or how the user wants to render them changes
    [items, renderItem],
  );

  const normalizedActiveIndex = ((Math.floor(activeIndex) % itemCount) + itemCount) % itemCount;

  const containerSize = sizes[normalizedActiveIndex] ?? { width: 0, height: 0 };

  const defaultRenderItem = useCallback(
    (value: T, distance: number, context?: { itemIndex: number; activeIndex: number }) => {
      const isActive = context && context.itemIndex === context.activeIndex;
      const useCharFade = isActive && typeof value === "string" && (value as string).length > 0;

      return (
        <div
          style={{
            // We use the distance from the camera (value from 0 to 1) to
            // interpolate the opacity and blur so that items fade away as they
            // get further from the camera. Diving by the number of items
            // ensures we only see one item at a time.
            opacity: 1 - distance * itemCount,
            filter: `blur(${distance * itemCount}px)`,
            // transition: `opacity ${transitionDuration}ms cubic-bezier(.27,.01,0,1), filter ${transitionDuration}ms cubic-bezier(.27,.01,0,1)`,
          }}
        >
          {useCharFade ? (
            <CharacterFadeIn
              text={value as string}
              activeIndex={context!.activeIndex}
              charDelayMs={20}
              fadeDurationMs={200}
            />
          ) : (
            value
          )}
        </div>
      );
    },
    [itemCount, transitionDuration],
  );

  const renderAtDistance = (
    iOriginal: number,
    distance: number,
    context?: { itemIndex: number; activeIndex: number },
  ) =>
    renderItem
      ? renderItem(items[iOriginal], distance, context)
      : defaultRenderItem(items[iOriginal], distance, context);

  if (itemCount === 0) return null;

  const showWheel = containerSize.width > 0 && containerSize.height > 0;

  return (
    <>
      {/* Hidden measurement container */}
      <div
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          top: -9999,
          left: -9999,
        }}
      >
        {items.map((_, i) => (
          <div
            key={`measure-${i}`}
            ref={(el) => {
              measureRefs.current[i] = el;
            }}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {renderAtDistance(i, 0)}
          </div>
        ))}
      </div>

      {/* Content wheel */}
      {showWheel && (
        <div
          className="relative"
          style={{
            perspective: 1000,
            width: containerSize.width,
            height: containerSize.height,
            transition:
              transitionDuration > 0
                ? `width ${transitionDuration}ms ${easing}, height ${transitionDuration}ms ${easing}`
                : undefined,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(${zOffset}px)`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(var(--wheel-ry, 0deg)) rotateX(${spinDeg}deg)`,
                transition:
                  transitionDuration > 0
                    ? `transform ${transitionDuration * 0.7}ms ${easing}`
                    : undefined,
              }}
            >
              {items.map((_, itemIndex) => {
                const indexOnWheel = wheelIndexFromOriginal(itemIndex);
                const thetaDeg = startDeg + indexOnWheel * ((stepRad * 180) / Math.PI);

                // Transformed position on the circle
                const transform = `rotateX(${thetaDeg}deg) translateZ(${radius}px)`;

                // Distance from facing camera (0..1)
                const actualDeg = thetaDeg + spinDeg;
                const normalized = ((actualDeg % 360) + 360) % 360;
                const rad = (normalized * Math.PI) / 180;
                const distance = (1 - Math.cos(rad)) / 2;

                const content = renderAtDistance(itemIndex, distance, {
                  itemIndex,
                  activeIndex: normalizedActiveIndex,
                });
                const s = sizes[itemIndex] ?? { width: "auto", height: "auto" };

                const alignmentStyles =
                  alignment === "left"
                    ? { left: 0, top: "50%", translate: "0 -50%" as const }
                    : alignment === "right"
                      ? { right: 0, top: "50%", translate: "0 -50%" as const }
                      : { left: "50%", top: "50%", translate: "-50% -50%" as const };

                return (
                  <div
                    key={itemIndex}
                    className="absolute"
                    style={{
                      ...alignmentStyles,
                      transformStyle: "preserve-3d",
                      transform,
                      backfaceVisibility: showBackface ? "visible" : "hidden",
                      ["--distance" as any]: distance,
                    }}
                  >
                    <div style={{ width: s.width, height: s.height }}>{content}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
