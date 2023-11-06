import React from 'react';
import styles from './button.module.css';

const Button = ({ text, type, onClick }) => {
  return type === 'submit' ? (
    <button onClick={onClick} className={`${styles.submitBtn} ${styles.button}`}>
      {text}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={
        type === 'cancel'
          ? `${styles.cancelBtn} ${styles.button}`
          : type === 'x'
          ? `${styles.xBtn}`
          : `${styles.editBtn} ${styles.button}`
      }
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
