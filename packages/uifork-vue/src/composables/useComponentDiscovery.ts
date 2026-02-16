import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useLocalStorage } from "./useLocalStorage";
import { getMountedComponents, getAllComponentsWithVersions, subscribe } from "../utils/componentRegistry";
import type { ComponentInfo, VersionInfo } from "../types";

interface UseComponentDiscoveryOptions {
  port: number;
}

export function useComponentDiscovery({ port: _port }: UseComponentDiscoveryOptions) {
  const wsComponents = ref<Array<{ name: string; path: string; versions: string[] }>>([]);
  const localComponents = ref<Array<{ name: string; versions: VersionInfo[] }>>([]);
  const mountedComponentIds = ref<string[]>([]);
  const [selectedComponent, setSelectedComponent] = useLocalStorage<string>(
    "uifork-selected-component",
    "",
    true,
  );

  const components = computed<ComponentInfo[]>(() => {
    if (wsComponents.value.length === 0) {
      return localComponents.value.map((c) => ({ name: c.name, path: "", versions: c.versions }));
    }

    // Start with server components, enriched with local version labels
    const merged: ComponentInfo[] = wsComponents.value.map((wsComp) => {
      const localComp = localComponents.value.find((lc) => lc.name === wsComp.name);
      const versionsWithLabels: VersionInfo[] = wsComp.versions.map((key) => {
        const localVersion = localComp?.versions.find((v) => v.key === key);
        return { key, label: localVersion?.label };
      });
      return { name: wsComp.name, path: wsComp.path, versions: versionsWithLabels };
    });

    // Include locally registered components not found on the server
    for (const local of localComponents.value) {
      if (!wsComponents.value.find((ws) => ws.name === local.name)) {
        merged.push({ name: local.name, path: "", versions: local.versions });
      }
    }

    return merged;
  });

  const mountedComponents = computed(() =>
    components.value.filter((c) => mountedComponentIds.value.includes(c.name)),
  );

  function handleComponentsUpdate(
    newWsComponents: Array<{ name: string; path: string; versions: string[] }>,
  ) {
    wsComponents.value = newWsComponents;
    if (!selectedComponent.value && newWsComponents.length > 0) {
      setSelectedComponent(newWsComponents[0].name);
    }
  }

  let unsubscribe: (() => void) | null = null;

  onMounted(() => {
    const updateFromRegistry = () => {
      mountedComponentIds.value = getMountedComponents();
      localComponents.value = getAllComponentsWithVersions();
    };
    updateFromRegistry();
    unsubscribe = subscribe(updateFromRegistry);
  });

  onUnmounted(() => {
    unsubscribe?.();
  });

  // Auto-select first component if nothing is selected
  watch(
    [selectedComponent, components],
    ([sel, comps]) => {
      if (!sel && comps.length > 0) {
        setSelectedComponent(comps[0].name);
      }
    },
  );

  // All known components (server + local), regardless of mount status.
  // Used by the component selector to show every forked component.
  const allKnownComponents = computed(() => components.value);

  return {
    components,
    mountedComponents,
    allKnownComponents,
    mountedComponentIds,
    selectedComponent,
    setSelectedComponent,
    onComponentsUpdate: handleComponentsUpdate,
  };
}
