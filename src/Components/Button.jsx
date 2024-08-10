import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, color, type, action }) => {
  return (
    <button type={action} className={`${styles[color]} ${styles[type]} cursor-pointer`}>{children}</button>
  )
}

export default Button