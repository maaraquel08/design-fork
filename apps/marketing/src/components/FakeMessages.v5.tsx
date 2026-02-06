import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "Founder",
    avatarColorId: "amber",
    text: "Can I see the other hero layout you mentioned?",
    time: "4:12 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: "Yeah, it's on the hero-alt branch. Let me get you a preview link...",
    time: "4:13 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColorId: "blue",
    text: "Actually, I might have merged that already. Let me check.",
    time: "4:14 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "Founder",
    avatarColorId: "amber",
    text: "Can I see the other hero layout you mentioned?",
    time: "4:12 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: "Yep — toggle version 3 in the switcher.",
    time: "4:13 PM",
  },
  {
    id: "3",
    user: "Founder",
    avatarColorId: "amber",
    text: "Oh interesting. I actually prefer this one.",
    time: "4:15 PM",
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
