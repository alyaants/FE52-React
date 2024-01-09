import React from "react";
import { Children } from "../../@types";
import ReactModal from "react-modal";
import style from "./modal.module.scss";
import { CloseIcon } from "../assets/icons/closeIcon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: Children;
}

const Modal = (props: ModalProps) => {
  return (
    <ReactModal
      className={style.containerModal}
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
    >
      <div onClick={props.onClose} className={style.closeModal}>
        <CloseIcon fill="black" />
      </div>
      {props.children}
    </ReactModal>
  );
};

export default Modal;
