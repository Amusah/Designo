import React from "react";

import styles from "./Blob.module.scss";
import { shared } from "../assets";

const { leaf } = shared.desktop;

const Blob = ({ type }) => {
  return (
    <img src={leaf} className={styles[type]} alt="leaf background pattern" />
  );
};

export default Blob;
