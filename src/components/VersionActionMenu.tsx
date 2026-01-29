import React from "react";
import styles from "./UIFork.module.css";
import { PromoteIcon } from "./icons/PromoteIcon";
import { OpenInEditorIcon } from "./icons/OpenInEditorIcon";
import { DeleteIcon } from "./icons/DeleteIcon";
import { RenameIcon } from "./icons/RenameIcon";

interface VersionActionMenuProps {
  version: string;
  position: { x: number; y: number };
  onPromote: (version: string, e: React.MouseEvent) => void;
  onOpenInEditor: (version: string, e: React.MouseEvent) => void;
  onDelete: (version: string, e: React.MouseEvent) => void;
  onRename: (version: string, e: React.MouseEvent) => void;
  onClose: () => void;
  setDropdownRef: (el: HTMLDivElement | null) => void;
}

export function VersionActionMenu({
  version,
  position,
  onPromote,
  onOpenInEditor,
  onDelete,
  onRename,
  onClose,
  setDropdownRef,
}: VersionActionMenuProps) {
  return (
    <div
      ref={setDropdownRef}
      className={styles.popover}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        visibility: "hidden",
      }}
      role="menu"
    >
      <button
        onClick={(e) => {
          onPromote(version, e);
          onClose();
        }}
        className={styles.popoverMenuItem}
      >
        <PromoteIcon className={styles.popoverMenuItemIcon} />
        <span>Promote</span>
      </button>
      <button
        onClick={(e) => {
          onOpenInEditor(version, e);
          onClose();
        }}
        className={styles.popoverMenuItem}
      >
        <OpenInEditorIcon className={styles.popoverMenuItemIcon} />
        <span>Open in editor</span>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(version, e);
          onClose();
        }}
        className={`${styles.popoverMenuItem} ${styles.popoverMenuItemDelete}`}
      >
        <DeleteIcon className={styles.popoverMenuItemIcon} />
        <span>Delete</span>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRename(version, e);
          onClose();
        }}
        className={styles.popoverMenuItem}
      >
        <RenameIcon className={styles.popoverMenuItemIcon} />
        <span>Rename</span>
      </button>
    </div>
  );
}
