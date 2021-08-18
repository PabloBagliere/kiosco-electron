import React, { MouseEventHandler } from 'react';

import styles from './Button.module.css';

interface props {
  status?: boolean;
  Onclick: MouseEventHandler;
  className?: string;
}

const Button: React.FC<props> = ({ children, status, Onclick, className }): JSX.Element => {
  if (className) {
    return (
      <button
        className={styles.default + ' ' + styles[className]}
        disabled={status}
        onClick={Onclick}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={styles.default} disabled={status} onClick={Onclick}>
      {children}
    </button>
  );
};

export default Button;
