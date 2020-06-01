import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Form.module.css';

const Form = () => {
  return (
    <div className={classNames('container', styles.form)}>
      <div className={styles.cta}>
        <div className={styles.ctaContent}>
          <p>
            <span>Try it free 7 days </span>then $20/mo. thereafter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
