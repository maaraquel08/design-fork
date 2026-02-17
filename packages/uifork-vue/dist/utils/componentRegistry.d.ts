import { VersionInfo } from '../types';
export interface ParentContext {
    id: string;
    version: string;
}
/**
 * Register a component as mounted with its available versions and labels.
 * Uses reference counting to handle multiple instances of the same component.
 * Optionally records parent containment info for smart switching.
 */
export declare function registerComponent(id: string, versions?: VersionInfo[], parent?: ParentContext | null): void;
/**
 * Unregister a component (when it unmounts).
 * Only removes from registry when the last instance unmounts.
 */
export declare function unregisterComponent(id: string): void;
/**
 * Check if a component is currently mounted
 */
export declare function isComponentMounted(id: string): boolean;
/**
 * Get all currently mounted component IDs
 */
export declare function getMountedComponents(): string[];
/**
 * Get version info for a specific component
 */
export declare function getComponentVersions(id: string): VersionInfo[];
/**
 * Get all mounted components with their versions (including labels)
 */
export declare function getAllComponentsWithVersions(): Array<{
    name: string;
    versions: VersionInfo[];
}>;
/**
 * Get parent containment info for a child component.
 * Returns which parent ForkedComponent version the child was last seen inside.
 */
export declare function getParentInfo(childId: string): ParentContext | undefined;
/**
 * Subscribe to changes in the mounted components registry
 */
export declare function subscribe(listener: () => void): () => void;
//# sourceMappingURL=componentRegistry.d.ts.map