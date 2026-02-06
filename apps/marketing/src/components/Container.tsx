import React from "react";
import { cn } from "../lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("max-w-2xl mx-auto px-4", className)} {...props} />;
}
