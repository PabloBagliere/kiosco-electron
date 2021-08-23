import classNames from 'classnames/bind';
import { ChangeEventHandler } from 'react';

import styles from './Input.module.css';

const cx = classNames.bind(styles);

interface props {
  className?: string;
  placeholder: string;
  name: string;
  type: string;
  status?: boolean;
  role?: string;
  onChange: ChangeEventHandler;
}

const Input: React.FC<props> = ({
  className,
  name,
  type,
  placeholder,
  status,
  role = 'input',
  onChange,
}): JSX.Element => {
  const clasName = cx('default', className);

  return (
    <input
      className={clasName}
      disabled={status}
      name={name}
      placeholder={placeholder}
      role={role}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
