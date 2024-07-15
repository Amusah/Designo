import React from 'react';

import Button from './Button';
import styles from './CTA.module.scss';
import { shared } from '../assets';

const { bgCta } = shared.desktop;

const CTA = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={`${styles.cta} border-radius`}>
        <div className={styles.ctaText}>
          <h2>
            Let’s talk about <br /> your project
          </h2>
          <p>
            Ready to take it to the next level? Contact us today and find out how
            our expertise can help your business grow.
          </p>
        </div>
        <Button type={'ctaBtn'} color={'btnWhite'}>Get in touch</Button>
        <img className={styles.ctaBg} src={bgCta} alt="round background image pattern" />
      </div>
    </div>
  );
}

export default CTA;