import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./favorite.module.scss";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Favorite = () => {
  return (
    <div className={styles.favoriteBtn}>
      <FontAwesomeIcon icon={faBookmark} className={styles.faBookmark} />
    </div>
  );
};
export default Favorite;