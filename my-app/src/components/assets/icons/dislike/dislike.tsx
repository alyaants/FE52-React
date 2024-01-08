import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../like/like.module.scss";
import { faThumbsDown} from "@fortawesome/free-regular-svg-icons";
const Dislike = () => {
    return (
      <div className={styles.dislikeBtn}>
        <FontAwesomeIcon icon={faThumbsDown} className={styles.faThumbsDown} />
      </div>
    );
  };
  export default Dislike;