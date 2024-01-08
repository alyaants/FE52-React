import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./other.module.scss";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Other = () => {
  return (
    <div className={styles.otherBtn}>
      <FontAwesomeIcon icon={faEllipsis} className={styles.faEllipsis} />
    </div>
  );
};
export default Other;
