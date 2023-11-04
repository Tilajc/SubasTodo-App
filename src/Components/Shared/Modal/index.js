import React, { useEffect } from 'react';

const Modal = ({ title, desc, isOpen, chooseModal, close, clickFunction }) => {
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
      <div>
        <div>{title}</div>
        <div>{desc}</div>
        <button onClick={clickFunction}>yes</button>
        <button onClick={close}>no</button>
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
