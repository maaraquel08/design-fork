import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages: Message[] = [
  {
    id: "1",
    user: "PM",
    avatarColorId: "emerald",
    text: "Hey do you have any ideas for the new sign up form?",
    time: "2:34 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: "Yeah one sec",
    time: "2:35 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColorId: "blue",
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
  return <FakeMessagesLayout layout="single" messages={messages} hideAvatar={hideAvatar} />;
}
