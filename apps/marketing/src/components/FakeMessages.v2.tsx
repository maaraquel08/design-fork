import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

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
