import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from "@floating-ui/dom";
import { useLocalStorage } from "hooks/useLocalStorage";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type VersionType<T extends Record<string, unknown>> = {
  render: (props: T) => ReactNode;
  description?: string;
  label: string;
};

type VersionsType<T extends Record<string, unknown>> = {
  [key: string]: VersionType<T>;
};

type UISwitcherProps<T extends Record<string, unknown>> = {
  id: string;
  versions: VersionsType<T>;
  defaultVersion?: string;
  props: T;
  showSwitcher?: boolean;
};

export const UISwitcher = <T extends Record<string, unknown>>({
  id,
  versions,
  defaultVersion,
  props,
  showSwitcher = true,
}: UISwitcherProps<T>) => {
  const versionKeys = Object.keys(versions);
  const [activeVersion, setActiveVersion] = useLocalStorage<string>(
    id,
    defaultVersion || versionKeys[0],
    true,
  );
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!versionKeys.includes(activeVersion)) {
      setActiveVersion(versionKeys[0]);
    }
  }, [activeVersion, versionKeys, setActiveVersion]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.metaKey) return;

      const currentIndex = versionKeys.indexOf(activeVersion);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const prevIndex = currentIndex - 1;
        const newVersion =
          versionKeys[prevIndex >= 0 ? prevIndex : versionKeys.length - 1];
        setActiveVersion(newVersion);
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const nextIndex = currentIndex + 1;
        const newVersion =
          versionKeys[nextIndex < versionKeys.length ? nextIndex : 0];
        setActiveVersion(newVersion);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVersion, versionKeys, setActiveVersion]);

  // Position dropdown using floating-ui
  useEffect(() => {
    if (!isOpen || !triggerRef.current || !dropdownRef.current) return;

    const updatePosition = async () => {
      try {
        const { x, y } = await computePosition(
          triggerRef.current!,
          dropdownRef.current!,
          {
            placement: "top-end",
            strategy: "fixed",
            middleware: [
              offset(8),
              flip({
                fallbackPlacements: ["bottom-end", "top-start", "bottom-start"],
              }),
              shift({
                padding: 20,
              }),
            ],
          },
        );

        setPosition({ x, y });
        // Make dropdown visible after positioning
        if (dropdownRef.current) {
          dropdownRef.current.style.visibility = "visible";
        }
      } catch (error) {
        console.error("Error positioning dropdown:", error);
      }
    };

    // Set initial hidden state
    if (dropdownRef.current) {
      dropdownRef.current.style.visibility = "hidden";
    }

    updatePosition();

    const cleanup = autoUpdate(
      triggerRef.current,
      dropdownRef.current,
      updatePosition,
      {
        ancestorScroll: true,
        ancestorResize: true,
        elementResize: true,
        layoutShift: true,
        animationFrame: false,
      },
    );

    return cleanup;
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        dropdownRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle keyboard navigation within dropdown
  useEffect(() => {
    if (!isOpen || !dropdownRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const options = Array.from(
          dropdownRef.current!.querySelectorAll<HTMLElement>('[role="option"]'),
        );
        const currentIndex = options.findIndex(
          (opt) => opt.getAttribute("aria-selected") === "true",
        );

        let nextIndex: number;
        if (e.key === "ArrowDown") {
          nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        }

        options[nextIndex]?.focus();
        setActiveVersion(versionKeys.toReversed()[nextIndex]);
      }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const focused = document.activeElement as HTMLElement;
        const optionKey = focused?.getAttribute("data-key");
        if (optionKey) {
          setActiveVersion(optionKey);
          setIsOpen(false);
          triggerRef.current?.focus();
        }
      }
    };

    dropdownRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      dropdownRef.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, versionKeys, setActiveVersion]);

  const Version =
    versions[activeVersion]?.render || versions[versionKeys[0]].render;

  const activeVersionLabel = versions[activeVersion]?.label || versionKeys[0];

  return (
    <>
      <Version {...props} />
      {showSwitcher &&
        createPortal(
          <>
            {/* Trigger button */}
            <button
              ref={triggerRef}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Select UI version"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              className="fixed bottom-5 right-5 z-[1000] flex items-center gap-2 rounded-lg bg-neutral-800 px-3 py-2 text-sm text-white shadow-lg transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              <span>{activeVersionLabel}</span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div
                ref={dropdownRef}
                role="listbox"
                aria-label="UI version options"
                className="fixed z-[1001] min-w-[120px] rounded-lg bg-neutral-800 py-1 shadow-xl border border-neutral-700"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  visibility: "hidden",
                }}
              >
                {versionKeys.toReversed().map((key) => {
                  const isSelected = key === activeVersion;
                  return (
                    <button
                      key={key}
                      role="option"
                      aria-selected={isSelected}
                      data-key={key}
                      onClick={() => {
                        setActiveVersion(key);
                        setIsOpen(false);
                        triggerRef.current?.focus();
                      }}
                      className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm text-white transition-colors hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
                    >
                      <div className="flex flex-col">
                        <div>{versions[key].label}</div>
                        {versions[key].description && (
                          <div className="text-xs text-neutral-400">
                            {versions[key].description}
                          </div>
                        )}
                      </div>
                      {isSelected && (
                        <svg
                          className="h-4 w-4 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.333 4L6 11.333 2.667 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </>,
          document.body,
        )}
    </>
  );
};
