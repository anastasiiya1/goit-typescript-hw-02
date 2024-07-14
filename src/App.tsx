import React, { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages, { Image } from "./fetchImages";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import './App.css';

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [empty, setEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function renderImages() {
      setLoading(true);
      try {
        const response = await fetchImages(query, page);
        if (!response.length) {
          return setEmpty(true);
        }

        setImages((prevImages) => [...prevImages, ...response]);
        setIsVisible(page > 0);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }
    renderImages();
  }, [query, page]);

  function handleSubmit(searchQuery: string) {
    setImages([]);
    setPage(1);
    setEmpty(false);
    setQuery(searchQuery);
  }
  function handleLoadMore() {
    setPage(page + 1);
  }

  function openModal(image: Image) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal}/>
      {loading && <Loader />}
      {isVisible && !empty && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage.urls.regular}
          altDescription={selectedImage.alt_description}
          user={selectedImage.user}
          description={selectedImage.description}
          likes={selectedImage.likes}
        />
      )}
    </>
  );
}

export default App;