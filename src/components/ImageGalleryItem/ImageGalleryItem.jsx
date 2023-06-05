import PropTypes from 'prop-types';
// import { ImageItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, openModal }) => {
  const { largeImageURL, tags, webformatURL } = item;
  return (
    <li
      onClick={e => {
        e.preventDefault();
        openModal(largeImageURL, tags);
      }}
    >
      <img src={webformatURL} alt={tags} loading="lazy" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
