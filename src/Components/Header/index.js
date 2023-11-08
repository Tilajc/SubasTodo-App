import React from 'react';

import styles from './header.module.css';

const Header = () => {
  const pepito = 'Hola Mundo';
  return (
    <div>
      <header className={styles.header}>{pepito}</header>
      <h1></h1>
    </div>
  );
};

export default Header;
