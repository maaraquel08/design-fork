import React, { useRef } from "react";
import styles from "./UIFork.module.css";
import { CheckmarkIcon } from "./icons/CheckmarkIcon";
import { CopyIcon } from "./icons/CopyIcon";
import { MoreOptionsIcon } from "./icons/MoreOptionsIcon";
import { VersionActionMenu } from "./VersionActionMenu";

interface VersionItemProps {
  version: string;
  isSelected: boolean;
  formatVersionLabel: (version: string) => string;
  popoverPosition: { x: number; y: number } | undefined;
  isPopoverOpen: boolean;
  onSelect: (version: string) => void;
  onDuplicate: (version: string, e: React.MouseEvent) => void;
  onTogglePopover: (version: string, e: React.MouseEvent) => void;
  onPromote: (version: string, e: React.MouseEvent) => void;
  onOpenInEditor: (version: string, e: React.MouseEvent) => void;
  onDelete: (version: string, e: React.MouseEvent) => void;
  onRename: (version: string, e: React.MouseEvent) => void;
  setPopoverTriggerRef: (version: string, el: HTMLButtonElement | null) => void;
  setPopoverDropdownRef: (version: string, el: HTMLDivElement | null) => void;
}

export function VersionItem({
  version,
  isSelected,
  formatVersionLabel,
  popoverPosition,
  isPopoverOpen,
  onSelect,
  onDuplicate,
  onTogglePopover,
  onPromote,
  onOpenInEditor,
  onDelete,
  onRename,
  setPopoverTriggerRef,
  setPopoverDropdownRef,
}: VersionItemProps) {
  return (
    <div
      role="option"
      aria-selected={isSelected}
      data-key={version}
      onClick={() => onSelect(version)}
      className={styles.versionItem}
    >
      {/* Checkmark */}
      <div className={styles.checkmarkContainer}>
        {isSelected && <CheckmarkIcon className={styles.checkmarkIcon} />}
      </div>
      <div className={styles.versionLabel}>{formatVersionLabel(version)}</div>
      {/* Action buttons */}
      <div
        data-actions
        className={styles.actions}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDuplicate(version, e);
          }}
          className={styles.actionButton}
          title="Clone version"
        >
          <CopyIcon className={styles.actionIcon} />
        </button>
        <div className={styles.actionButtonMore}>
          <button
            ref={(el) => setPopoverTriggerRef(version, el)}
            onClick={(e) => {
              e.stopPropagation();
              onTogglePopover(version, e);
            }}
            className={styles.actionButton}
            title="More options"
          >
            <MoreOptionsIcon className={styles.actionIcon} />
          </button>
          {/* Popover menu */}
          {isPopoverOpen && (
            <VersionActionMenu
              version={version}
              position={popoverPosition || { x: 0, y: 0 }}
              onPromote={onPromote}
              onOpenInEditor={onOpenInEditor}
              onDelete={onDelete}
              onRename={onRename}
              onClose={() => onTogglePopover(version, {} as React.MouseEvent)}
              setDropdownRef={(el) => setPopoverDropdownRef(version, el)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
