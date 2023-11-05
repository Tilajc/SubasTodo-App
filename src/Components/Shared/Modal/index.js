import React, { useEffect } from 'react';
import styles from './modal.module.css';

const Modal = ({
  title,
  desc,
  isOpen,
  img,
  confirmBtn,
  denyBtn,
  chooseModal,
  close,
  clickFunction
}) => {
  useEffect(() => {
    let timer;
    if (!chooseModal && isOpen) {
      timer = setTimeout(() => {
        close();
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [close]);

  return isOpen ? (
    chooseModal ? (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div>{img}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{desc}</div>
          <button onClick={clickFunction}>{confirmBtn}</button>
          <button onClick={close}>{denyBtn}</button>
        </div>
      </div>
    ) : (
      <>
        <div>
          <button onClick={close}>X</button>
          <div>{title}</div>
          <div>{desc}</div>
        </div>
      </>
    )
  ) : null;
};

export default Modal;
