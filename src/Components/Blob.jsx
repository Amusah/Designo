import React from 'react';

import styles from './Blob.module.scss';

const Blob = ({ type }) => {
  return (
    <div className={styles[type]}></div>
  )
}

export default Blob;