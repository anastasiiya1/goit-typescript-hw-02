import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';
import { Image } from "../../fetchImages";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
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
};

export default ImageGallery;