import { useEffect, useState } from "react";

const WORDS = ["Structured", "Organized", "Fast", "Embedded", "Deployable"] as const;

export function CycleText({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return <span className={className}>{WORDS[index]}</span>;
}
