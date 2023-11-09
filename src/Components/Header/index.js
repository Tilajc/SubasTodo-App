import { useNavigate } from 'react-router';
import React from 'react';

import styles from './header.module.css';
import Button from '../Shared/Button';

const Header = () => {
  const navigate = useNavigate();
  //funcion para redirigir al login on click
  const onSubmit = () => {
    navigate('/login');
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="assets/logo.png" alt="logo" className={styles.img} />
        <h1 className={styles.tittle}>SubasTodo</h1>
      </div>
      <Button type="submit" text="Log in" onClick={onSubmit} className={styles.sharedButton} />
      <button className={styles.button}></button>
    </header>
  );
};

export default Header;
