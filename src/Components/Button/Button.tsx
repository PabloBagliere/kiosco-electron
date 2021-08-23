import classNames from 'classnames/bind';
import { MouseEventHandler, FC } from 'react';

import styles from './Button.module.css';

const cx = classNames.bind(styles);

interface props {
  status?: boolean;
  Onclick: MouseEventHandler;
  className?: string;
}

const Button: FC<props> = ({ children, status, Onclick, className }): JSX.Element => {
  const clasName = cx('default', className);

  return (
    <button className={clasName} disabled={status} onClick={Onclick}>
      {children}
    </button>
  );
};

export default Button;
