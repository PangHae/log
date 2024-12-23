import { FC } from 'react';

import { DrinkDetail } from '@/types/common';
import { TabType } from '@/types/tab';

import MenuItem from '../MenuItem';
import styles from './menuList.module.scss';

interface Props {
  drinks: {
    [key: TabType]: DrinkDetail[];
  };
  currentTabId: TabType;
  onClick: (value: DrinkDetail) => void;
}

const MenuList: FC<Props> = ({ drinks, currentTabId, onClick }) => {
  return (
    <section className={styles.list}>
      {drinks[currentTabId].map((value) => (
        <MenuItem
          key={value.id}
          onClick={() => onClick(value)}
          detail={value}
        />
      ))}
    </section>
  );
};

export default MenuList;
