import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchImages from "./fetchImages";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [empty, setEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    renderImages();
  }, [query, page]);

  function handleSubmit(searchQuery) {
    setImages([]);
    setPage(1);
    setEmpty(false);
    setQuery(searchQuery);
  }
  function handleLoadMore() {
    setPage(page + 1);
  }

  function openModal(image) {
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
