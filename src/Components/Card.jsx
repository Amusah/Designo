import React from 'react'

import styles from './Card.module.scss';

const Card = ({ cardImage, cardTitle, cardText }) => {
  return (
    <div className={`${styles.card}`}>
      <img
        className={styles.cardImage}
        src={cardImage}
        alt="project screenshot"
      />
      <div className={styles.cardBody}>
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
      </div>
    </div>
  );
}

export default Card