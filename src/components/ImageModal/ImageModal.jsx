import Modal from "react-modal";
import styles from './ImageModal.module.css';

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ isOpen, onRequestClose, imageUrl, altDescription, description, likes, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={styles.modalContent}>
        <img className={styles.modalImage} src={imageUrl} alt={altDescription} />
        <h3 className={styles.modalAuthor}>Author: {user.name}</h3>
        <p className={styles.modalDescription}>{description}</p>
        <p className={styles.modalLikes}>Likes: {likes}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;