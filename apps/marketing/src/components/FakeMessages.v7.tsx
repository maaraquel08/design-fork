import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: "The dropdown felt weird — can you tweak spacing?",
    time: "3:22 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Sure — new branch is up. You'll need to go through checkout again to test it.",
    time: "3:23 PM",
  },
  {
    id: "3",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: "Ugh, I was mid-checkout. Now I have to start over.",
    time: "3:24 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: "The dropdown felt weird — can you tweak spacing?",
    time: "3:22 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Forked a version — try it in the same flow.",
    time: "3:23 PM",
  },
  {
    id: "3",
    user: "PM",
    avatarColor: "bg-emerald-600",
    text: (
      <span>
        <span className="opacity-60 italic">(PM testing mid-checkout)</span>
        <br />
        Oh wow — way easier to compare when the state stays intact.
      </span>
    ),
    time: "3:25 PM",
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
