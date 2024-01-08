import { useDispatch } from "react-redux";
import cardsList from ".";
import { Post, PostsList } from "../../@types";
import PostCard from "../postCard";
import { PostCardSize } from "../postCard/postCard";
import styles from "./cardsList.module.scss";
import { setSelectedPost, setSelectedPostOpened } from "../../redux/reducers/postSlice";
interface CardsListProps {
  cardsList: PostsList;
}
const CardsList = (props: CardsListProps) => {
  const dispatch = useDispatch();
  const onMoreClick = (post: Post) => () => {
    dispatch(setSelectedPost(post));
    dispatch(setSelectedPostOpened(true))
  }

  return CardsList.length ? (
    <div className={styles.cardsListContainer}>
      {/* <PostCard size={PostCardSize.Large} {...props.cardsList[0]} /> */}
      <div className={styles.medium}>
        {props.cardsList.map((item, index) => {
          if (index >= 0 && index <= 5) {
            return (
              <PostCard key={item.id} size={PostCardSize.Medium} {...item} onMoreClick={onMoreClick(item)} />
            );
          }
        })}
      </div>
      <div className={styles.small}>
        {props.cardsList.map((item, index) => {
          if (index >= 6 && index <= 11) {
            return (
              <PostCard key={item.id} size={PostCardSize.Small} {...item} onMoreClick={onMoreClick(item)} />
            );
          }
        })}
      </div>
    </div>
  ) : null;
};
export default CardsList;
