import { FC } from 'react';

import { COCKTAILS } from '@/data/cocktail';
import { ETCS } from '@/data/etc';
import { WHISKYS } from '@/data/whisky';
import { DrinkDetail } from '@/types/common';
import { TabType } from '@/types/tab';

import MenuItem from '../MenuItem';
import styles from './menuList.module.css';

interface Props {
  currentTabId: TabType;
  onClick: (value: DrinkDetail) => void;
}

const MenuList: FC<Props> = ({ currentTabId, onClick }) => {
  const menu: {
    [key: TabType]: DrinkDetail[];
  } = {
    cocktail: COCKTAILS,
    whisky: WHISKYS,
    etc: ETCS,
  };

  return (
    <section className={styles.list}>
      {menu[currentTabId].map((value) => (
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
