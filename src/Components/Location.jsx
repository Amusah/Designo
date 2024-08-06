import Button from "./Button";
import styles from "./Location.module.scss";

import { shared } from "../assets";
import { locations } from "../constants";

const { australia, canada, unitedKingdom } = shared.desktop;

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      {locations.map((location, index) => (
        <div className={styles.location} key={index}>
          <div className={styles.head}>
            <img src={location.illustration} alt="canada illustration" />
            <img className={styles.bgPattern} src={location.bgPattern} alt="" />
          </div>
          <h3>{location.name}</h3>
          <Button color={"btnPeach"}>See Location</Button>
        </div>
      ))}
    </div>
  );
};

export default Location;
