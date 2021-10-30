import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Spinner from "./components/Spinner/Spinner";

import fetchImages from "services/fetchImages";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImg, setLargeImg] = useState("");

  useEffect(() => {
    if (query === "") {
      return;
    }
    const handleFetchImages = async () => {
      setIsLoading(true);
      const data = await fetchImages(query, page);
      setImages((prevImages) => [...prevImages, ...data]);
      if (page !== 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
      setIsLoading(false);
    };
    handleFetchImages();
  }, [page, query]);

  const handleQueryChange = (q) => {
    setImages([]);
    setQuery(q);
    setPage(1);
  };

  const handleButtonClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (larImg) => {
    setLargeImg(larImg);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleQueryChange} />

      <ImageGallery onImgClick={handleImageClick} images={images} />
      {isLoading && <Spinner />}
      {images.length !== 0 && <Button onClick={handleButtonClick} />}
      {isModalOpen && <Modal largeImg={largeImg} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
