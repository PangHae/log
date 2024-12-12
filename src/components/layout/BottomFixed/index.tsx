import { FC, PropsWithChildren } from 'react';

import styles from './bottomFixed.module.scss';

const BottomFixed: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.bottomFixedContainer}>{children}</div>;
};

export default BottomFixed;
