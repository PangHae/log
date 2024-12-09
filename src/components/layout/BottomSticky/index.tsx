import { FC, PropsWithChildren } from 'react';
import styles from './bottomSticky.module.css';

const BottomSticky: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.bottomStickyContainer}>{children}</div>;
};

export default BottomSticky;
