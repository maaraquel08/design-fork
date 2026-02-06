import React from "react";
import { cn } from "../lib/utils";

export interface Message {
  id: string;
  user: string;
  avatarColor: string;
  text: React.ReactNode;
  time: string;
}

export interface ConversationProps {
  messages: Message[];
  hideAvatar?: boolean;
}

export function Conversation({ messages, hideAvatar = false }: ConversationProps) {
  return (
    <div
      className={cn(
        "rounded-xl border shadow-sm w-full font-sans overflow-hidden",
        "bg-stone-800 text-stone-50 border-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:border-stone-200",
      )}
    >
      <div className="flex flex-col p-3">
        {messages.map((msg, index) => {
          const previousMessage = index > 0 ? messages[index - 1] : null;
          const isConsecutiveFromSameUser = previousMessage?.user === msg.user;
          const shouldShowAvatar = !hideAvatar && !isConsecutiveFromSameUser;

          return (
            <div
              key={msg.id}
              className={cn("flex gap-3 p-2 -mx-2 rounded-lg fade-in")}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {shouldShowAvatar ? (
                <div
                  className={cn(
                    "w-7 h-7 rounded-md shrink-0 flex items-center justify-center font-semibold text-xs shadow-sm",
                    `${msg.avatarColor} text-white dark:${msg.avatarColor.replace("bg-", "bg-stone-200 ")} dark:text-stone-950`,
                  )}
                >
                  {msg.user[0]}
                </div>
              ) : (
                <div className="w-7 shrink-0" />
              )}
              <div className="flex-1 min-w-0 grid gap-0.5">
                {shouldShowAvatar && (
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-xs">{msg.user}</span>
                    <span className="text-[10px] dark:text-stone-600 text-stone-400">
                      {msg.time}
                    </span>
                  </div>
                )}
                <div className="text-[13px] leading-relaxed dark:text-stone-900 text-stone-100">
                  {msg.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface FakeMessagesLayoutProps {
  hideAvatar?: boolean;
}

export type FakeMessagesLayoutConfig =
  | { layout: "single"; messages: Message[] }
  | {
      layout: "beforeAfter";
      beforeMessages: Message[];
      afterMessages: Message[];
      beforeLabel?: string;
      afterLabel?: string;
    };

export function FakeMessagesLayout(props: FakeMessagesLayoutProps & FakeMessagesLayoutConfig) {
  const { hideAvatar = false } = props;

  if (props.layout === "single") {
    return (
      <div
        className={cn(
          "rounded-xl border shadow-sm w-full font-sans overflow-hidden",
          "bg-stone-800 text-stone-50 border-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:border-stone-200",
        )}
      >
        <div className="flex flex-col p-4">
          {props.messages.map((msg, index) => {
            const previousMessage = index > 0 ? props.messages[index - 1] : null;
            const isConsecutiveFromSameUser = previousMessage?.user === msg.user;
            const shouldShowAvatar = !hideAvatar && !isConsecutiveFromSameUser;
            return (
              <div
                key={msg.id}
                className={cn("flex gap-3 p-2 -mx-2 rounded-lg fade-in")}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {shouldShowAvatar ? (
                  <div
                    className={cn(
                      "w-9 h-9 rounded-md shrink-0 flex items-center justify-center font-semibold text-sm shadow-sm",
                      `${msg.avatarColor} text-white dark:${msg.avatarColor.replace("bg-", "bg-stone-200 ")} dark:text-stone-950`,
                    )}
                  >
                    {msg.user[0]}
                  </div>
                ) : (
                  <div className="w-9 shrink-0" />
                )}
                <div className="flex-1 min-w-0 grid gap-0.5">
                  {!hideAvatar && (
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-sm">{msg.user}</span>
                      <span className="text-[11px] dark:text-stone-600 text-stone-400">
                        {msg.time}
                      </span>
                    </div>
                  )}
                  <div className="text-[15px] leading-relaxed dark:text-stone-900 text-stone-100">
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const beforeLabel = props.beforeLabel ?? "Before uifork";
  const afterLabel = props.afterLabel ?? "After uifork";

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center my-16 px-4">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xs font-medium text-muted-foreground">{beforeLabel}</div>
          <Conversation messages={props.beforeMessages} hideAvatar={hideAvatar} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xs font-medium text-muted-foreground">{afterLabel}</div>
          <Conversation messages={props.afterMessages} hideAvatar={hideAvatar} />
        </div>
      </div>
    </div>
  );
}
