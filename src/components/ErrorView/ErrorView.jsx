// import oops from '../../assets/oops.png';
import css from './ErrorView.module.css';

const ErrorView = () => {
  return (
    <div className={css.errorWrapper}>
      {/* <img src={oops} alt="oops" width="240" /> */}
      <p className={css.errorText}>
        Oops...🥶 there are no images matching your search...
      </p>
    </div>
  );
};

export default ErrorView;
