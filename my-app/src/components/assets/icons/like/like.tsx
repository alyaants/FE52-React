import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./like.module.scss";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const Like = () => {
  return (
    <div className={styles.likeBtn}>
      <FontAwesomeIcon icon={faThumbsUp} className={styles.faThumbsUp} />
    </div>
  );
};
export default Like;