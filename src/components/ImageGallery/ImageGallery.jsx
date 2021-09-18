import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { getImages } from '../../store/request/getImages';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClick, setImages, searchWord }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getImages(searchWord, 1).then(images => {
      setImages(images);
      setLoading(false);
    });
  }, [searchWord, setImages]);

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
};

ImageGallery.propTypes = {
  searchWord: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
