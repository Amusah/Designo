import styles from './CardLarge.module.scss';

import { shared } from "../assets";


const { twoCircles } = shared.desktop;

function CardLarge({ children, type, imgScr }) {
  return (
    <div className={`${styles.cardContainer} ${styles[type]}`}>
      <img className={styles.cardImage}
        src={imgScr}
        alt="Image of a lady"
      />
      <div className={styles.cardText}>
        {children}
        <img
          className={styles.bgPatternDefault}
          src={twoCircles}
          alt="background pattern"
        />
      </div>
    </div>
  );
}

 export default CardLarge;