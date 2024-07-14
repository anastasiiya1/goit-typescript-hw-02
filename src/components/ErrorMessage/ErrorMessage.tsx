import React from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return (
    <p className={styles.errorMessage}>
      There is an error rendering the images. Please try again.
    </p>
  );
};

export default ErrorMessage;