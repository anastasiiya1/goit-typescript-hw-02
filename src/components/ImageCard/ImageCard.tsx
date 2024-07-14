import React from "react";
import styles from './ImageCard.module.css';

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return (
    <img className={styles.galleryImage} src={src} alt={alt} onClick={onClick} />
  );
};

export default ImageCard;