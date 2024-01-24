import { useDispatch } from "react-redux";
import {
  setFavouritesPosts,
  setLikeStatus,
  setSelectedPostModal,
  setSelectedPostModalOpened,
} from "../redux/reducers/postSlice";
import { LikeStatus, Post } from "../@types";
import {
  setSelectedImage,
  setSelectedImageOpened,
} from "../redux/reducers/imgSlice";

const useCardActions = () => {
  const dispatch = useDispatch();
  const onStatusClick = (card: Post) => (status: LikeStatus) => {
    dispatch(setLikeStatus({ card, status }));
  };

  const onFavouriteClick = (card: Post) => () => {
    dispatch(setFavouritesPosts({ card }));
  };

  const onMoreClick = (post: Post) => () => {
    dispatch(setSelectedPostModal(post));
    dispatch(setSelectedPostModalOpened(true));
  };
  const onImageClick = (image: string) => () => {
    dispatch(setSelectedImage(image));
    dispatch(setSelectedImageOpened(true));
  };

  return { onStatusClick, onFavouriteClick, onMoreClick, onImageClick };
};

export default useCardActions;
