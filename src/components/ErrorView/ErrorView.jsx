import css from './ErrorView.module.css';

const ErrorView = () => {
  <div className={css.errorWrapper}>
    <p className={css.errorText}>no images found for your request...</p>
  </div>;
};

export default ErrorView;
