import React from 'react';

import { navLinks } from '../constants';
import { shared } from '../assets';
import styles from './Navbar.module.scss';

const { logoDark, logoLight } = shared.desktop;

const Navbar = () => {
  return (
    <nav className={`${styles.nav}`}>
      <img className={styles.navLogo} src={logoDark} alt="logo" />
      <ul className={styles.navLinks}>
        {navLinks.map((link, idx) => (
          <li key={link.id} className={`${idx === navLinks.length - 1 ? '' : styles.mr}`} >{link.title}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar