import { ComponentProps, FC, ReactNode } from 'react';
import cx from 'clsx';
import styles from './button.module.css';

interface Props extends ComponentProps<'button'> {
  children: ReactNode;
  className?: string;
}

const Button: FC<Props> = ({ className = '', onClick, children }) => {
  return (
    <button
      className={cx(styles.button, { [styles[className]]: !!className })}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
