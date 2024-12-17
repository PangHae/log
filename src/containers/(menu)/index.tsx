'use client';
import { FC } from 'react';

import { useAtom, useSetAtom } from 'jotai';

import { drinkAtom } from '@/atoms/drink';
import { tabIdAtom } from '@/atoms/tab';
import Header from '@/components/Header';
import MenuList from '@/components/MenuList';
import Tab from '@/components/Tab';
import { DrinkDetail } from '@/types/common';
import { TabItem, TabType } from '@/types/tab';

import styles from './menu.module.scss';

interface Props {
  drinkTypes: TabItem[];
}

const Menu: FC<Props> = ({ drinkTypes }) => {
  const [currentTabId, setCurrentTabId] = useAtom(tabIdAtom);
  const setDrink = useSetAtom(drinkAtom);

  const onClickTab = (id: TabType) => {
    setCurrentTabId(id);
  };

  const handleClickMenuItem = (value: DrinkDetail) => {
    setDrink(value);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Tab
          tabs={drinkTypes}
          currentTabId={currentTabId}
          onChange={onClickTab}
        />
        <MenuList currentTabId={currentTabId} onClick={handleClickMenuItem} />
      </main>
    </>
  );
};

export default Menu;
