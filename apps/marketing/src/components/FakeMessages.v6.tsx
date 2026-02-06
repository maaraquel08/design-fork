import type { Message } from "./FakeMessagesLayout";
import { FakeMessagesLayout } from "./FakeMessagesLayout";

const messages1: Message[] = [
  {
    id: "1",
    user: "Sam",
    avatarColorId: "blue",
    text: "Forking a version of the signup flow.",
    time: "2:45 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: (
      <span>
        <span className="opacity-60 italic">(Cursor prompt visible)</span>
        <br />
        "Create 3 variations focused on reducing friction."
      </span>
    ),
    time: "2:45 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColorId: "blue",
    text: (
      <span>
        <span className="opacity-60 italic">(versions appear in switcher)</span>
        <br />
        All live in the preview if you want to compare.
      </span>
    ),
    time: "2:47 PM",
  },
];

const messages2: Message[] = [
  {
    id: "1",
    user: "Sam",
    avatarColorId: "blue",
    text: "Forking a version of the signup flow.",
    time: "2:45 PM",
  },
  {
    id: "2",
    user: "Sam",
    avatarColorId: "blue",
    text: (
      <span>
        <span className="opacity-60 italic">(Cursor prompt visible)</span>
        <br />
        "Create 3 variations focused on reducing friction."
      </span>
    ),
    time: "2:45 PM",
  },
  {
    id: "3",
    user: "Sam",
    avatarColorId: "blue",
    text: (
      <span>
        <span className="opacity-60 italic">(versions appear in switcher)</span>
        <br />
        All live in the preview if you want to compare.
      </span>
    ),
    time: "2:47 PM",
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
