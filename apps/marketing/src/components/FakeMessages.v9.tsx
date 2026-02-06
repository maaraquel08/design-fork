import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "Designer",
    avatarColorId: "purple",
    text: "Do you have a few layout directions?",
    time: "3:30 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: "Yeah — think of it like duplicated frames. But live in the app.",
    time: "3:31 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "Designer",
    avatarColorId: "purple",
    text: "Do you have a few layout directions?",
    time: "3:30 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: "Yeah — think of it like duplicated frames. But live in the app.",
    time: "3:31 PM",
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
