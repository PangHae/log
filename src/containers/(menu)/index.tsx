"use client";
import MenuList from "@/components/MenuList";
import Tab from "@/components/Tab";
import { TABS } from "@/data/tab";
import styles from "./menu.module.css";
import { TabType } from "@/types/tab";
import { DrinkDetail } from "@/types/common";
import Header from "@/components/Header";
import {
  useAtom,
  useSetAtom,
} from "jotai";
import { tabIdAtom } from "@/atoms/tab";
import { drinkAtom } from "@/atoms/drink";

const Menu = () => {
  const [
    currentTabId,
    setCurrentTabId,
  ] = useAtom(tabIdAtom);
  const setDrink = useSetAtom(
    drinkAtom
  );

  const onClickTab = (
    id: TabType
  ) => {
    setCurrentTabId(id);
  };

  const handleClickMenuItem =
    (value: DrinkDetail) => {
      setDrink(value);
    };

  return (
    <>
      <Header />
      <main
        className={
          styles.main
        }
      >
        <Tab
          tabs={TABS}
          currentTabId={
            currentTabId
          }
          onChange={
            onClickTab
          }
        />
        <MenuList
          currentTabId={
            currentTabId
          }
          onClick={
            handleClickMenuItem
          }
        />
      </main>
    </>
  );
};

export default Menu;
