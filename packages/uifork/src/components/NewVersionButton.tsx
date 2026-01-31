import { PlusIcon } from "./icons/PlusIcon";
import styles from "./UIFork.module.css";

type NewVersionButtonProps = {
  onClick: (e: React.MouseEvent) => void;
};

export function NewVersionButton({ onClick }: NewVersionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.newVersionButton} ${styles.menuItem}`}
      title="Create new version"
    >
      <div className={styles.newVersionIconContainer}>
        <PlusIcon className={styles.newVersionIcon} />
      </div>
      <span>New version</span>
    </button>
  );
}
