import { ComponentInfo } from '../types';
interface UseComponentDiscoveryOptions {
    port: number;
}
export declare function useComponentDiscovery({ port: _port }: UseComponentDiscoveryOptions): {
    components: import('vue').ComputedRef<ComponentInfo[]>;
    mountedComponents: import('vue').ComputedRef<ComponentInfo[]>;
    allKnownComponents: import('vue').ComputedRef<ComponentInfo[]>;
    mountedComponentIds: import('vue').Ref<string[], string[]>;
    selectedComponent: import('vue').Ref<string, string>;
    setSelectedComponent: (value: string | ((val: string) => string)) => void;
    onComponentsUpdate: (newWsComponents: Array<{
        name: string;
        path: string;
        versions: string[];
    }>) => void;
};
export {};
//# sourceMappingURL=useComponentDiscovery.d.ts.map