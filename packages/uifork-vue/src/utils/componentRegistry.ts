/**
 * Registry to track which components are currently mounted in the Vue tree.
 * This allows UIFork to only show components that are actually being used.
 * Also stores version information (including labels) for offline mode support.
 */

import type { VersionInfo } from "../types";

export interface ParentContext {
  id: string;
  version: string;
}

// Map of component id -> { versions, refCount }
// refCount tracks how many instances of this component are mounted
const mountedComponents = new Map<string, { versions: VersionInfo[]; refCount: number }>();
const listeners = new Set<() => void>();

// Tracks which parent version a child was last seen inside.
// Persists across mount/unmount so we can navigate back to it.
const containmentMap = new Map<string, ParentContext>();

/**
 * Register a component as mounted with its available versions and labels.
 * Uses reference counting to handle multiple instances of the same component.
 * Optionally records parent containment info for smart switching.
 */
export function registerComponent(
  id: string,
  versions: VersionInfo[] = [],
  parent?: ParentContext | null,
): void {
  if (parent) {
    containmentMap.set(id, parent);
  }

  const existing = mountedComponents.get(id);
  if (existing) {
    mountedComponents.set(id, { versions, refCount: existing.refCount + 1 });
  } else {
    mountedComponents.set(id, { versions, refCount: 1 });
    notifyListeners();
  }
}

/**
 * Unregister a component (when it unmounts).
 * Only removes from registry when the last instance unmounts.
 */
export function unregisterComponent(id: string): void {
  const existing = mountedComponents.get(id);
  if (!existing) return;

  if (existing.refCount > 1) {
    mountedComponents.set(id, { versions: existing.versions, refCount: existing.refCount - 1 });
  } else {
    mountedComponents.delete(id);
    notifyListeners();
  }
}

/**
 * Check if a component is currently mounted
 */
export function isComponentMounted(id: string): boolean {
  return mountedComponents.has(id);
}

/**
 * Get all currently mounted component IDs
 */
export function getMountedComponents(): string[] {
  return Array.from(mountedComponents.keys());
}

/**
 * Get version info for a specific component
 */
export function getComponentVersions(id: string): VersionInfo[] {
  return mountedComponents.get(id)?.versions || [];
}

/**
 * Get all mounted components with their versions (including labels)
 */
export function getAllComponentsWithVersions(): Array<{ name: string; versions: VersionInfo[] }> {
  return Array.from(mountedComponents.entries()).map(([name, { versions }]) => ({
    name,
    versions,
  }));
}

/**
 * Get parent containment info for a child component.
 * Returns which parent ForkedComponent version the child was last seen inside.
 */
export function getParentInfo(childId: string): ParentContext | undefined {
  return containmentMap.get(childId);
}

/**
 * Subscribe to changes in the mounted components registry
 */
export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notifyListeners(): void {
  listeners.forEach((listener) => listener());
}
