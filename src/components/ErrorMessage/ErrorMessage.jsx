import styles from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <p className={styles.errorMessage}>
      There is an error rendering the images. Please try again.
    </p>
  );
}

export default ErrorMessage;