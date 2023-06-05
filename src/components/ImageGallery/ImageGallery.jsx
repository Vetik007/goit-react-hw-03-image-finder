import PropTypes from 'prop-types';
// import { GalleryList } from './ImageG2allery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(img => (
        <ImageGalleryItem key={img.id} item={img} openModal={openModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
