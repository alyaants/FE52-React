import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../modal";
import { ImgSelectors, setSelectedImage, setSelectedImageOpened } from "../../../../redux/reducers/imgSlice";
import style from "./selectedImg.module.scss";

const SelectedImg = () => {
    const isOpened = useSelector(ImgSelectors.getSelectedImageOpened);
    const selectedImage = useSelector(ImgSelectors.getSelectedImage);
  
    const dispatch = useDispatch();

    const onCloseModal = () => {
      dispatch(setSelectedImageOpened(false));
      dispatch(setSelectedImage(" "));
    };
  
    return selectedImage ? (
      <Modal isOpen={isOpened} onClose={onCloseModal}>
        <div className={style.container}>
          <div className={style.selectedImage}>
            <img src={selectedImage} alt="" />
          </div>
        </div>
      </Modal>
    ) : null;
  };
  
  export default SelectedImg;