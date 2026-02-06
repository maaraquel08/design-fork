import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "Engineer",
    avatarColor: "bg-indigo-600",
    text: "Does this leave a bunch of junk code?",
    time: "4:05 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Yeah, I'll need to clean up the old branches. There are like 5 variations still in the repo.",
    time: "4:06 PM",
  },
  {
    id: "3",
    user: "Engineer",
    avatarColor: "bg-indigo-600",
    text: "Ugh, more branch cleanup.",
    time: "4:07 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "Engineer",
    avatarColor: "bg-indigo-600",
    text: "Does this leave a bunch of junk code?",
    time: "4:05 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColor: "bg-blue-600",
    text: "Nope — promoted the winner. All forks removed automatically.",
    time: "4:06 PM",
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
