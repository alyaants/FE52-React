import classNames from "classnames";
import styles from "./postCard.module.scss";
import Like from "../assets/icons/like";
import Dislike from "../assets/icons/dislike";
import Favorite from "../assets/icons/favorite";
import Other from "../assets/icons/other";
import { Theme } from "../../@types";
import { useThemeContext } from "../../context/theme";

export enum PostCardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}
interface PostCardProps {
  size: PostCardSize;
  id: number;
  image: string;
  text?: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
  onMoreClick?: () => void;
  onImageClick?: () => void;
}

const PostCard = (props: PostCardProps) => {
  const postCardStyle = styles[props.size];
  const { themeValue } = useThemeContext();
  return (
    <div className={classNames(postCardStyle)}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <span className={styles.date}>{props.date}</span>
          <div
            className={classNames(styles.cardTitle, {
              [styles.darkTabTitle]: themeValue === Theme.Dark,
            })}
          >
            {props.title}
          </div>
          {props.size === PostCardSize.Large && (
            <p className={styles.text}>{props.text}</p>
          )}
        </div>
          <div className={styles.cardImg}>
            <img onClick={props.onImageClick} src={props.image} alt=""  />
          </div>
      </div>
      <div
        className={classNames(styles.iconsWrapper, {
          [styles.darkIconsWrapper]: themeValue === Theme.Dark,
        })}
      >
        <div className={styles.icons}>
          <div
            className={classNames(styles.icon, {
              [styles.darkIcon]: themeValue === Theme.Dark,
            })}
          >
            <Like />
          </div>
          <div
            className={classNames(styles.icon, {
              [styles.darkIcon]: themeValue === Theme.Dark,
            })}
          >
            <Dislike />
          </div>
        </div>
        <div className={styles.icons}>
          <div
            className={classNames(styles.icon, {
              [styles.darkIcon]: themeValue === Theme.Dark,
            })}
          >
            <Favorite />
          </div>
          <div
            className={classNames(styles.icon, {
              [styles.darkIcon]: themeValue === Theme.Dark,
            })}
          >
            {props.onMoreClick && (
              <div onClick={props.onMoreClick}>
                <Other />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
