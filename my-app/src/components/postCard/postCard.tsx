import classNames from "classnames";
import styles from "./postCard.module.scss";
import Like from "../assets/icons/like/like";
import Dislike from "../assets/icons/dislike/dislike";
import Other from "../assets/icons/other";
import { LikeStatus, Post, Theme } from "../../@types";
import { useThemeContext } from "../../context/theme";
import { useSelector } from "react-redux";
import { PostSelectors } from "../../redux/reducers/postSlice";
import { useNavigate } from "react-router-dom";
import { FavoriteFill } from "../assets/icons/favorite/favoriteFill";
import { Favorite } from "../assets/icons/favorite/favorite";

export enum PostCardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
  Search = "search",
}
interface PostCardProps extends Post {
  size: PostCardSize;
  onMoreClick?: () => void;
  onImageClick?: () => void;
  onStatusClick: (status: LikeStatus) => void;
  onFavouriteClick: () => void;
}

const PostCard = (props: PostCardProps) => {
  const postCardStyle = styles[props.size];
  const { themeValue } = useThemeContext();
  const likedPosts = useSelector(PostSelectors.getLikedPosts);
  const dislikedPosts = useSelector(PostSelectors.getDislikedPosts);
  const likedIndex = likedPosts.findIndex((item) => item.id === props.id);
  const dislikedIndex = dislikedPosts.findIndex((item) => item.id === props.id);
  const favouritePosts = useSelector(PostSelectors.getFavouritePosts);
  const favouriteIndex = favouritePosts.findIndex(
    (item) => item.id === props.id
  );
  const navigate = useNavigate();
  const onTitleClick = () => {
    navigate(`/post/${props.id}`);
  };

  return (
    <div className={classNames(postCardStyle)}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <span className={styles.date}>{props.date}</span>
          <div
            className={classNames(styles.cardTitle, {
              [styles.darkTabTitle]: themeValue === Theme.Dark,
            })}
            onClick={onTitleClick}
          >
            {props.title}
          </div>
          {props.size === PostCardSize.Large && (
            <p className={styles.text}>{props.text}</p>
          )}
        </div>
        <div className={styles.cardImg}>
          <img onClick={props.onImageClick} src={props.image} alt="" />
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
            onClick={() => props.onStatusClick(LikeStatus.Like)}
          >
            <Like /> {likedIndex > -1 && 1}
          </div>
          <div
            className={classNames(styles.icon, {
              [styles.darkIcon]: themeValue === Theme.Dark,
            })}
            onClick={() => props.onStatusClick(LikeStatus.Dislike)}
          >
            <Dislike /> {dislikedIndex > -1 && 1}
          </div>
        </div>
        <div className={styles.icons}>
          <div
            className={classNames(styles.icon, {
              [styles.darkIcon]: themeValue === Theme.Dark,
            })}
            onClick={() => props.onFavouriteClick()}
          >
            {favouriteIndex === -1 ? <Favorite /> : <FavoriteFill />}
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
