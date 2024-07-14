import styles from './ImageCard.module.css';

function ImageCard({ src, alt, onClick }) {
  return (
    <img className={styles.galleryImage} src={src} alt={alt} onClick={onClick} />
  );
}

export default ImageCard;