import React from "react";
import { cn } from "../lib/utils";

interface Message {
  id: string;
  user: string;
  avatarColor: string;
  text: React.ReactNode;
  time: string;
}

const messages1: Message[] = [
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

const messages2: Message[] = [
  {
    id: "1",
    user: "Designer",
    avatarColor: "bg-purple-600",
    text: "What do you think about the new color scheme?",
    time: "3:15 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "I like it! The contrast is much better now.",
    time: "3:16 PM",
  },
  {
    id: "3",
    user: "Designer",
    avatarColor: "bg-purple-600",
    text: "Great! I'll update the design system with these colors.",
    time: "3:18 PM",
  },
];

interface ConversationProps {
  messages: Message[];
  hideAvatar?: boolean;
}

function Conversation({ messages, hideAvatar = false }: ConversationProps) {
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
            <div key={msg.id} className={cn("flex gap-3 p-2 -mx-2 rounded-lg")}>
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
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-xs">{msg.user}</span>
                  <span className="text-[10px] dark:text-stone-600 text-stone-400">{msg.time}</span>
                </div>
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

interface FakeMessagesProps {
  hideAvatar?: boolean;
}

export default function FakeMessages({ hideAvatar = false }: FakeMessagesProps) {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center my-16 px-4">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xs font-medium text-muted-foreground">Before uifork</div>
          <Conversation messages={messages1} hideAvatar={hideAvatar} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xs font-medium text-muted-foreground">After uifork</div>
          <Conversation messages={messages2} hideAvatar={hideAvatar} />
        </div>
      </div>
    </div>
  );
}
