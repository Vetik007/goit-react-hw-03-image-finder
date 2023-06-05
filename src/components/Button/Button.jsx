// import { BtnLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return <button onClick={loadMore}>Load more</button>;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
