export type ConnectionStatus = "connected" | "disconnected" | "connecting" | "failed";
export type WebSocketMessageType = "duplicate_version" | "delete_version" | "new_version" | "rename_version" | "rename_label" | "promote_version";
interface UseWebSocketConnectionOptions {
    port: number;
    selectedComponent: () => string;
    onFileChanged?: () => void;
    onComponentsUpdate?: (components: Array<{
        name: string;
        path: string;
        versions: string[];
    }>) => void;
    onVersionAck?: (payload: {
        version: string;
        message?: string;
        newVersion?: string;
    }) => void;
    onPromoted?: (componentName: string) => void;
    onError?: (message: string) => void;
}
export declare function useWebSocketConnection({ port, selectedComponent, onFileChanged, onComponentsUpdate, onVersionAck, onPromoted, onError, }: UseWebSocketConnectionOptions): {
    connectionStatus: import('vue').Ref<ConnectionStatus, ConnectionStatus>;
    sendMessage: (type: WebSocketMessageType, payload: Record<string, unknown>) => void;
};
export {};
//# sourceMappingURL=useWebSocketConnection.d.ts.map