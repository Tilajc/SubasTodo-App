import React, { useEffect } from 'react';
import styles from './modal.module.css';

/**This component is used by passing the properties of title for the title, desc for the description, isOpen to open the modal, confirmBtn for the confirm or accept button, denyBtn for the cancel or exit button, clickFunction, which is what suits it to indicate to the confirm button the action you want to perform and chooseModal to determine whether to use a modal that requires a confirmation or a modal that shows a text that disappears after 5 seconds */

const Modal = ({ title, desc, isOpen, confirmBtn, denyBtn, chooseModal, close, clickFunction }) => {
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
          <div className={styles.logoContainer}>
            <img className={styles.logoImg} src="assets/logo.png" alt="logo-subastodo" />
          </div>
          <div className={styles.title}>{title.toUpperCase()}</div>
          <div className={styles.subTitle}>{desc}</div>
          <button onClick={clickFunction}>{confirmBtn}</button>
          <button onClick={close}>{denyBtn}</button>
        </div>
      </div>
    ) : (
      <>
        <div className={styles.containerSelfClose}>
          <div className={styles.subContainerSelfClose}>
            <div className={styles.descSelfClose}>{desc}</div>
            <button onClick={close}>X</button>
          </div>
        </div>
      </>
    )
  ) : null;
};

export default Modal;
