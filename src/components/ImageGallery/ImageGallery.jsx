import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard 
            src={image.urls.small} 
            alt={image.alt_description} 
            onClick={() => onImageClick(image)} 
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;