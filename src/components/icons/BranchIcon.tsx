import React from "react";

interface BranchIconProps {
  className?: string;
}

export function BranchIcon({ className }: BranchIconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main vertical line with circles */}
      <circle
        cx="5"
        cy="13.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="5" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 4V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Branching line */}
      <path
        d="M5 8 C 8.5 8, 11.5 6, 12 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="2.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
