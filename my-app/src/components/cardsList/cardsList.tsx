import { Post, PostsList } from "../../@types";
import PostCard from "../postCard/postCard";
import { PostCardSize } from "../postCard/postCard";
import styles from "./cardsList.module.scss";
import Loader from "../loader/loader";
import useCardActions from "../../hooks/useCardsActions";

interface CardsListProps {
  cardsList: PostsList;
  onMoreClick?: (post: Post) => void;
  onImageClick?: (image: string) => void;
  isLoading: boolean
}
const CardsList = (props: CardsListProps) => {
  const { onStatusClick, onFavouriteClick, onMoreClick, onImageClick } =
    useCardActions();
  return CardsList.length && !props.isLoading ? (
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
                onStatusClick={onStatusClick(item)}
                onFavouriteClick={onFavouriteClick(item)}
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
                onStatusClick={onStatusClick(item)}
                onFavouriteClick={onFavouriteClick(item)}
              />
            );
          }
        })}
      </div>
    </div>
  ) : (
    <Loader />
  );
};
export default CardsList;
