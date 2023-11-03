import React from 'react';
import styles from './button.module.css';

const Button = ({ text, type, clickBtn }) => {
  return type === 'submit' ? (
    <button onClick={clickBtn} className={`${styles.submitBtn} ${styles.button}`}>
      {text}
    </button>
  ) : (
    <button
      onClick={clickBtn}
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
