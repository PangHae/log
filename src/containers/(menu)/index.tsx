'use client';
import { useAtom, useSetAtom } from 'jotai';

import { drinkAtom } from '@/atoms/drink';
import { tabIdAtom } from '@/atoms/tab';
import Header from '@/components/Header';
import MenuList from '@/components/MenuList';
import Tab from '@/components/Tab';
import { TABS } from '@/data/tab';
import { DrinkDetail } from '@/types/common';
import { TabType } from '@/types/tab';

import styles from './menu.module.css';

const Menu = () => {
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
        <Tab tabs={TABS} currentTabId={currentTabId} onChange={onClickTab} />
        <MenuList currentTabId={currentTabId} onClick={handleClickMenuItem} />
      </main>
    </>
  );
};

export default Menu;
