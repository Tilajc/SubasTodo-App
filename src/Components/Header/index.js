import React from 'react';

import styles from './header.module.css';

const Header = () => {
  const pepito = 'SubasTodo';
  return (
    <div>
      <header className={styles.header}>{pepito}</header>
      <h1>SubasTodo</h1>
      <img src="assets/logo.png" alt="" className={styles.header} />
      <button></button>
    </div>
  );
};

export default Header;
