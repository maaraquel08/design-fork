import { useCallback, useEffect, useRef, useState } from "react";

export type ConnectionStatus = "connected" | "disconnected" | "connecting" | "failed";

export type WebSocketMessageType =
  | "duplicate_version"
  | "delete_version"
  | "new_version"
  | "rename_version"
  | "promote_version";

interface UseWebSocketConnectionOptions {
  port: number;
  selectedComponent: string;
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

export function useWebSocketConnection({
  port,
  selectedComponent,
  onFileChanged,
  onComponentsUpdate,
  onVersionAck,
  onPromoted,
  onError,
}: UseWebSocketConnectionOptions) {
  const [wsConnection, setWsConnection] = useState<WebSocket | null>(null);
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("disconnected");

  // Keep refs for callbacks to avoid reconnection on callback changes
  const selectedComponentRef = useRef(selectedComponent);
  const onFileChangedRef = useRef(onFileChanged);
  const onComponentsUpdateRef = useRef(onComponentsUpdate);
  const onVersionAckRef = useRef(onVersionAck);
  const onPromotedRef = useRef(onPromoted);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    selectedComponentRef.current = selectedComponent;
  }, [selectedComponent]);

  useEffect(() => {
    onFileChangedRef.current = onFileChanged;
    onComponentsUpdateRef.current = onComponentsUpdate;
    onVersionAckRef.current = onVersionAck;
    onPromotedRef.current = onPromoted;
    onErrorRef.current = onError;
  }, [onFileChanged, onComponentsUpdate, onVersionAck, onPromoted, onError]);

  // WebSocket connection management
  useEffect(() => {
    const wsUrl = `ws://localhost:${port}/ws`;

    setConnectionStatus("connecting");
    const ws = new WebSocket(wsUrl);
    let hasConnected = false;

    ws.onopen = () => {
      hasConnected = true;
      setConnectionStatus("connected");
      setWsConnection(ws);
      onFileChangedRef.current?.();
    };

    ws.onclose = () => {
      // Only mark as failed if we never successfully connected
      if (!hasConnected) {
        setConnectionStatus("failed");
      } else {
        setConnectionStatus("disconnected");
      }
      setWsConnection(null);
    };

    ws.onerror = (error) => {
      console.error("[UIFork] WebSocket error:", error);
      // Mark as failed if we haven't connected yet
      if (!hasConnected) {
        setConnectionStatus("failed");
      } else {
        setConnectionStatus("disconnected");
      }
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("[WebSocket] Received:", data);

        if (data.type === "components" && data.payload?.components) {
          onComponentsUpdateRef.current?.(data.payload.components);
        } else if (data.type === "file_changed") {
          onFileChangedRef.current?.();
        } else if (data.type === "ack" && data.payload?.version) {
          const message = data.payload.message || "";
          const newVersion = data.payload.newVersion;

          if (message.includes("promoted")) {
            const promotedComponent =
              data.payload.component || selectedComponentRef.current;
            onPromotedRef.current?.(promotedComponent);
            return;
          }

          onVersionAckRef.current?.({
            version: data.payload.version,
            message,
            newVersion,
          });
        } else if (data.type === "error") {
          console.error("[UIFork] Server error:", data.payload?.message);
          onErrorRef.current?.(data.payload?.message || "Unknown error");
        }
      } catch (error) {
        console.error("[UIFork] Error parsing WebSocket message:", error);
      }
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [port]);

  // Send WebSocket message helper
  const sendMessage = useCallback(
    (type: WebSocketMessageType, payload: Record<string, unknown>) => {
      if (wsConnection && wsConnection.readyState === WebSocket.OPEN) {
        wsConnection.send(
          JSON.stringify({
            type,
            payload: { ...payload, component: selectedComponentRef.current },
          }),
        );
      } else {
        console.warn("[UIFork] WebSocket not connected, cannot send message");
      }
    },
    [wsConnection],
  );

  return {
    connectionStatus,
    sendMessage,
  };
}
