import React from "react";
import Modal from "../../../modal";
import { useDispatch, useSelector } from "react-redux";
import {
  PostSelectors,
  setSelectedPost,
  setSelectedPostOpened,
} from "../../../../redux/reducers/postSlice";
import PostCard from "../../../postCard";
import { PostCardSize } from "../../../postCard/postCard";

const SelectedPost = () => {
  const isOpened = useSelector(PostSelectors.getSelectedPostOpened);
  const selectedPost = useSelector(PostSelectors.getSelectedPost);
  const dispatch = useDispatch();
  const onCloseModal = () => {
    dispatch(setSelectedPostOpened(false));
    dispatch(setSelectedPost(null));
  };
  return selectedPost ? (
    <Modal isOpen={isOpened} onClose={onCloseModal}>
      <PostCard size={PostCardSize.Large} {...selectedPost} />
    </Modal>
  ) : null;
};
export default SelectedPost;
