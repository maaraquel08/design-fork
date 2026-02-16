import { ref, watch, onMounted, onUnmounted } from "vue";

export type ConnectionStatus = "connected" | "disconnected" | "connecting" | "failed";

export type WebSocketMessageType =
  | "duplicate_version"
  | "delete_version"
  | "new_version"
  | "rename_version"
  | "rename_label"
  | "promote_version";

interface UseWebSocketConnectionOptions {
  port: number;
  selectedComponent: () => string;
  onFileChanged?: () => void;
  onComponentsUpdate?: (
    components: Array<{ name: string; path: string; versions: string[] }>,
  ) => void;
  onVersionAck?: (payload: { version: string; message?: string; newVersion?: string }) => void;
  onPromoted?: (componentName: string) => void;
  onError?: (message: string) => void;
}

export function useWebSocketConnection({
  port,
  selectedComponent,
  onFileChanged,
  onComponentsUpdate,
  onVersionAck,
  onPromoted,
  onError,
}: UseWebSocketConnectionOptions) {
  const connectionStatus = ref<ConnectionStatus>("disconnected");
  let wsConnection: WebSocket | null = null;
  let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;
  let isConnecting = false;
  let shouldReconnect = true;
  let hasEverConnected = false;
  let retryCount = 0;

  function connectWebSocket() {
    if (wsConnection?.readyState === WebSocket.OPEN || isConnecting) return;

    const wsUrl = `ws://localhost:${port}/ws`;
    isConnecting = true;

    if (
      (retryCount === 0 || hasEverConnected) &&
      connectionStatus.value !== "failed"
    ) {
      connectionStatus.value = "connecting";
    }
    retryCount++;

    const ws = new WebSocket(wsUrl);
    let hasConnected = false;

    ws.onopen = () => {
      hasConnected = true;
      hasEverConnected = true;
      retryCount = 0;
      isConnecting = false;
      connectionStatus.value = "connected";
      wsConnection = ws;
      onFileChanged?.();
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
        reconnectTimeout = null;
      }
    };

    ws.onclose = () => {
      isConnecting = false;
      if (!hasConnected) {
        if (connectionStatus.value !== "failed") {
          connectionStatus.value = "failed";
        }
      } else {
        connectionStatus.value = "disconnected";
      }
      wsConnection = null;

      if (shouldReconnect) {
        if (reconnectTimeout) clearTimeout(reconnectTimeout);
        reconnectTimeout = setTimeout(() => {
          reconnectTimeout = null;
          if (shouldReconnect) connectWebSocket();
        }, 3000);
      }
    };

    ws.onerror = () => {
      isConnecting = false;
      if (!hasConnected) {
        if (connectionStatus.value !== "failed") {
          connectionStatus.value = "failed";
        }
      } else {
        connectionStatus.value = "disconnected";
      }
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "components" && data.payload?.components) {
          onComponentsUpdate?.(data.payload.components);
        } else if (data.type === "file_changed") {
          onFileChanged?.();
        } else if (data.type === "ack" && data.payload?.version) {
          const message = data.payload.message || "";
          const newVersion = data.payload.newVersion;

          if (message.includes("promoted")) {
            const promotedComponent = data.payload.component || selectedComponent();
            onPromoted?.(promotedComponent);
            return;
          }

          onVersionAck?.({ version: data.payload.version, message, newVersion });
        } else if (data.type === "error") {
          onError?.(data.payload?.message || "Unknown error");
        }
      } catch {
        // Error parsing WebSocket message
      }
    };
  }

  function sendMessage(type: WebSocketMessageType, payload: Record<string, unknown>) {
    if (wsConnection && wsConnection.readyState === WebSocket.OPEN) {
      wsConnection.send(
        JSON.stringify({
          type,
          payload: { ...payload, component: selectedComponent() },
        }),
      );
    }
  }

  onMounted(() => {
    shouldReconnect = true;
    retryCount = 0;
    connectWebSocket();
  });

  onUnmounted(() => {
    shouldReconnect = false;
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
      reconnectTimeout = null;
    }
    if (wsConnection?.readyState === WebSocket.OPEN) {
      wsConnection.close();
    }
  });

  return {
    connectionStatus,
    sendMessage,
  };
}
