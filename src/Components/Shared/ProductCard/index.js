import React from 'react';
import styles from './productCard.module.css';
import { FaHeart /* FaBookmark */ } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';

const ProductCard = ({ photo, price, title, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.photoPlaceHolder}>{photo}</div>
      <img src={photo} />
      <div className={styles.priceAndIconsContainer}>
        <span className={styles.p}>${price}</span>
        <div>
          <FaHeart /> <BsBookmark />
        </div>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.p}>{title}</p>
      </div>
      <div className={styles.timeContainer}>
        <p className={styles.p}>ends in {time}</p>
      </div>
    </div>
  );
};

export default ProductCard;
