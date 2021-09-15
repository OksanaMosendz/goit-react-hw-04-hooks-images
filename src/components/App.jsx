import React from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    images: [],
    isModalOpen: false,
    searchWord: '',
    modalImage: {},
  };

  onHadleSubmitForm = word => {
    if (word.trim() !== '') {
      this.setState({
        searchWord: word,
        images: [],
      });
    }
  };

  setImages = imgs => {
    this.setState({ images: imgs });
  };

  LoadMoreImages = imgs => {
    const { images } = this.state;
    this.setState({ images: images.concat(imgs) });
  };

  onHandleCloseModal = e => {
    if (e.target.id === 'overley') {
      this.setState({ isModalOpen: false });
    }
  };

  onHandleClickImage = e => {
    const { images } = this.state;
    const modalImage = images.find(image => e.target.id === String(image.id));
    this.setState({ isModalOpen: true, modalImage: modalImage });

    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({ isModalOpen: false });
      }
    });
  };

  render() {
    const { images, isModalOpen, modalImage, searchWord } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onHadleSubmitForm} />

        {searchWord.trim() !== '' && (
          <ImageGallery
            images={images}
            onClick={this.onHandleClickImage}
            setImages={this.setImages}
            searchWord={searchWord}
          />
        )}

        {images.length > 0 && (
          <Button
            searchWord={searchWord}
            LoadMoreImages={this.LoadMoreImages}
          />
        )}

        {isModalOpen && (
          <Modal image={modalImage} onClick={this.onHandleCloseModal} />
        )}
      </>
    );
  }
}
