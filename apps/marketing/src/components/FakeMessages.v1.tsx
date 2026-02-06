import React from "react";
import { cn } from "../lib/utils";

interface Message {
  id: string;
  user: string;
  avatarColor: string;
  text: React.ReactNode;
  time: string;
}

const messages: Message[] = [
  {
    id: "1",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: "Hey do you have any ideas for the new sign up form?",
    time: "2:34 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Yeah one sec",
    time: "2:35 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: (
      <span>
        Here's a preview branch with a few ideas, you can switch between them with the floating tool
        in the corner <span className="opacity-80">your-preview-branch-bmr57itwm.vercel.app</span>
      </span>
    ),
    time: "2:37 PM",
  },
];

interface FakeMessagesProps {
  hideAvatar?: boolean;
}

export default function FakeMessages({ hideAvatar = false }: FakeMessagesProps) {
  return (
    <div
      className={cn(
        "rounded-xl border shadow-sm w-full font-sans overflow-hidden",
        "bg-stone-800 text-stone-50 border-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:border-stone-200",
      )}
    >
      <div className="flex flex-col p-4">
        {messages.map((msg, index) => {
          const previousMessage = index > 0 ? messages[index - 1] : null;
          const isConsecutiveFromSameUser = previousMessage?.user === msg.user;
          const shouldShowAvatar = !hideAvatar && !isConsecutiveFromSameUser;

          return (
            <div key={msg.id} className={cn("flex gap-3 p-2 -mx-2 rounded-lg")}>
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
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-sm">{msg.user}</span>
                  <span className="text-[11px] dark:text-stone-600 text-stone-400">{msg.time}</span>
                </div>
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
