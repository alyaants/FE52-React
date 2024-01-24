import { useNavigate, useParams } from "react-router-dom";
import Dislike from "../../../assets/icons/dislike/dislike";
import { Favorite } from "../../../assets/icons/favorite/favorite";
import Like from "../../../assets/icons/like/like";
import styles from "./selectedPost.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PostSelectors,
  getSelectedPost,
} from "../../../../redux/reducers/postSlice";
import { RoutesList } from "../../router";
import Loader from "../../../loader/loader";

// interface SelectedPostPrpos {
//   title: string;
//   image: string;
//   text?: string;
// }

const SelectedPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedPost = useSelector(PostSelectors.getSelectedPost);

  const isSelectedPostLoading = useSelector(
    PostSelectors.getSelectedPostLoading
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getSelectedPost(id));
    }
  }, [id]);

  const onHomeClick = () => {
    navigate(RoutesList.Home);
  };

  return selectedPost && !isSelectedPostLoading ? (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <span onClick={onHomeClick}>Home</span>{" "}
        <span className={styles.postNumber}>| Post {selectedPost.id}</span>
      </div>
      <div className={styles.title}>{selectedPost.title}</div>
      <div className={styles.selectedPostImage}>
        <img src={selectedPost.image} alt="#" />
      </div>

      <div className={styles.selectedPostText}>{selectedPost.text}</div>

      <div className={styles.selectedPostReaction}>
        <div className={styles.selectedPostReactionLikeDislike}>
          <div className={styles.selectedPostLike}>
            <Like />
          </div>
          <div className={styles.selectedPostDislike}>
            <Dislike />
          </div>
        </div>
        <div className={styles.selectedPostReactionFavorites}>
          <Favorite /> Add to Favorites
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default SelectedPost;
