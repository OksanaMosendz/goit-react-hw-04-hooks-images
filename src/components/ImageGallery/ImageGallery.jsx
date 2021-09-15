import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { getImages } from '../../store/request/getImages';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './ImageGallery.module.css';

export class ImageGallery extends React.Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { searchWord, setImages } = this.props;

    getImages(searchWord, 1).then(images => {
      setImages(images);
      this.setState({ isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevStat) {
    const prevSearchWord = prevProps.searchWord;
    const nextSearchWord = this.props.searchWord;
    const { setImages } = this.props;
    if (prevSearchWord !== nextSearchWord) {
      this.setState({ isLoading: true });
      getImages(nextSearchWord, 1).then(images => {
        setImages(images);
        this.setState({ isLoading: false });
      });
    }
  }

  render() {
    const { images, onClick } = this.props;
    const { isLoading } = this.state;
    return (
      <div className={css.ImageGalleryContainer}>
        {isLoading ? (
          <Loader
            className={css.Loader}
            type="Circles"
            color="#003cff"
            height={80}
            width={80}
          />
        ) : (
          <ul className={css.ImageGallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                src={image.webformatURL}
                alt={image.tags}
                id={image.id}
                onClick={onClick}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  searchWord: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
