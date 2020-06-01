import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';

const Details = () => {
  return (
    <div className={classNames('container', styles.details)}>
      <h1 className={styles.title}>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
};

export default Details;
