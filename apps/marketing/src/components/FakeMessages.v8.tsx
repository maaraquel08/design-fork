import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "Engineer",
    avatarColor: "bg-indigo-600",
    text: "Can you try moving the CTA higher?",
    time: "2:50 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Sure, give me a few minutes to push a new branch.",
    time: "2:50 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "New preview link: cta-test-2.vercel.app",
    time: "2:53 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "Engineer",
    avatarColor: "bg-indigo-600",
    text: "Can you try moving the CTA higher?",
    time: "2:50 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Forking it now.",
    time: "2:50 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: (
      <span>
        <span className="opacity-60 italic">(seconds later)</span>
        <br />
        Try version 4.
      </span>
    ),
    time: "2:50 PM",
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
