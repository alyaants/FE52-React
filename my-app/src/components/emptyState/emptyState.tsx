import { EmptyListIcon } from "../assets/icons/emptyListIcon";
import styles from "./empyState.module.scss";
interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = (props: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <EmptyListIcon />
      <div className={styles.infoContainer}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );
};
export default EmptyState;
