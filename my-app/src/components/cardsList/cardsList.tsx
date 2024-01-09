import { useDispatch } from "react-redux";
import { Post, PostsList } from "../../@types";
import PostCard from "../postCard";
import { PostCardSize } from "../postCard/postCard";
import styles from "./cardsList.module.scss";
import {
  setSelectedPost,
  setSelectedPostOpened,
} from "../../redux/reducers/postSlice";
import {
  setSelectedImage,
  setSelectedImageOpened,
} from "../../redux/reducers/imgSlice";

interface CardsListProps {
  cardsList: PostsList;
  onMoreClick?: (post: Post) => void;
  onImageClick?: (image: string) => void;
}
const CardsList = (props: CardsListProps) => {
  const dispatch = useDispatch();

  const onMoreClick = (post: Post) => () => {
    dispatch(setSelectedPost(post));
    dispatch(setSelectedPostOpened(true));
  };
  const onImageClick = (image: string) => () => {
    dispatch(setSelectedImage(image));
    dispatch(setSelectedImageOpened(true));
  };

  return CardsList.length ? (
    <div className={styles.cardsListContainer}>
      {/* <PostCard size={PostCardSize.Large} {...props.cardsList[0]} /> */}
      <div className={styles.medium}>
        {props.cardsList.map((item, index) => {
          if (index >= 0 && index <= 5) {
            return (
              <PostCard
                key={item.id}
                size={PostCardSize.Medium}
                {...item}
                onMoreClick={onMoreClick(item)}
                onImageClick={onImageClick(item.image)}
              />
            );
          }
        })}
      </div>
      <div className={styles.small}>
        {props.cardsList.map((item, index) => {
          if (index >= 6 && index <= 11) {
            return (
              <PostCard
                key={item.id}
                size={PostCardSize.Small}
                {...item}
                onMoreClick={onMoreClick(item)}
                onImageClick={onImageClick(item.image)}
              />
            );
          }
        })}
      </div>
    </div>
  ) : null;
};
export default CardsList;
