import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "Design Lead",
    avatarColorId: "purple",
    text: "Love where this landed. Curious — what other directions did you explore?",
    time: "3:15 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: "A few — give me a sec",
    time: "3:16 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColorId: "blue",
    text: "I think I have some old branches… might've deleted one…",
    time: "3:18 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "Design Lead",
    avatarColorId: "purple",
    text: "Love where this landed. Curious — what other directions did you explore?",
    time: "3:15 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: "Here's the full exploration trail. Same preview URL — you can flip through all the versions.",
    time: "3:16 PM",
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
