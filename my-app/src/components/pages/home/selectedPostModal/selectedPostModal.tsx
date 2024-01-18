import React from "react";
import Modal from "../../../modal";
import { useDispatch, useSelector } from "react-redux";
import {
  PostSelectors, setSelectedPostModal, setSelectedPostModalOpened,

} from "../../../../redux/reducers/postSlice";
import PostCard from "../../../postCard/postCard";
import { PostCardSize } from "../../../postCard/postCard";

const SelectedPost = () => {
  const isOpened = useSelector(PostSelectors.getSelectedPostModalOpened);
  const selectedPost = useSelector(PostSelectors.getSelectedPostModal);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setSelectedPostModalOpened(false));
    dispatch(setSelectedPostModal(null));
  };

  return selectedPost ? (
    <Modal isOpen={isOpened} onClose={onCloseModal}>
      <PostCard size={PostCardSize.Large} {...selectedPost} onStatusClick={(_) => {}} onFavouriteClick={() => {}} />
    </Modal>
  ) : null;
};
export default SelectedPost;
