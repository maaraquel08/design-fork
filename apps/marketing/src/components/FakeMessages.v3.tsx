import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: "Hey do you have options for the pricing page redesign?",
    time: "2:34 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Yep — here are a few branches:",
    time: "2:35 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: (
      <span>
        • pricing-v2
        <br />• pricing-alt-layout
        <br />• pricing-table-test
        <br />• pricing-mobile-rework
        <br />
        <br />
        Each has a preview link.
      </span>
    ),
    time: "2:35 PM",
  },
  {
    id: "4",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: "Which one is the newest?",
    time: "2:36 PM",
  },
  {
    id: "5",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "…good question 😅",
    time: "2:37 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: "Hey do you have options for the pricing page redesign?",
    time: "2:34 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Yep — all in one preview. Floating switcher in the corner.",
    time: "2:35 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: (
      <span>
        <span className="opacity-80">pricing-preview.vercel.app</span>
      </span>
    ),
    time: "2:35 PM",
  },
];

interface FakeMessagesProps {
  hideAvatar?: boolean;
}

export default function FakeMessages({ hideAvatar = false }: FakeMessagesProps) {
  return (
    <FakeMessagesLayout
      layout="beforeAfter"
      beforeMessages={messages1}
      afterMessages={messages2}
      hideAvatar={hideAvatar}
    />
  );
}
