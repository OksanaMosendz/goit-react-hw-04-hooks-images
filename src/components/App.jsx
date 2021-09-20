import React, { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { getImages } from 'store/request/getImages';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [modalImage, setModalImage] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (searchWord.trim() !== '') {
      setLoading(true);
      getImages(searchWord, 1).then(imgs => {
        setLoading(false);
        setImages(imgs);
        if (imgs.length === 0) {
          setNotification(
            ' No search results! Change your search word and try again!',
          );
        }
      });
    }
  }, [searchWord, setNotification]);

  useEffect(() => {
    if (page > 1) {
      setLoading(true);
      getImages(searchWord, page).then(imgs => {
        setImages(prevImgs => prevImgs.concat(imgs));
        setLoading(false);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    }
  }, [page, searchWord]);

  const onHadleSubmitForm = word => {
    if (word.trim() !== '') {
      setNotification('');
      setSearchWord(word);
      setImages([]);
      setPage(1);
    }
  };

  const onHandleCloseModal = e => {
    if (e.target.id === 'overley') {
      setModalOpen(false);
    }
  };

  const onHandleClickImage = e => {
    const modalImage = images.find(image => e.target.id === String(image.id));
    setModalOpen(true);
    setModalImage(modalImage);

    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setModalOpen(false);
      }
    });
  };

  return (
    <>
      <SearchBar onSubmit={onHadleSubmitForm} searchWord={searchWord} />

      {images.length !== 0 ? (
        <ImageGallery
          images={images}
          onClick={onHandleClickImage}
          addImages={imgs => setImages(imgs)}
          searchWord={searchWord}
          isLoading={isLoading}
        />
      ) : (
        <Notification notification={notification} />
      )}

      <Button
        searchWord={searchWord}
        onClick={() => setPage(prevPage => prevPage + 1)}
        images={images}
        isLoading={isLoading}
      />
      {isModalOpen && <Modal image={modalImage} onClick={onHandleCloseModal} />}
    </>
  );
};
