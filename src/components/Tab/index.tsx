"use client";
import { FC } from "react";
import Item from "./Item";
import styles from "./tab.module.css";
import {
  TabType,
  type TabItem,
} from "@/types/tab";

interface Props {
  tabs: TabItem[];
  onChange: (
    id: TabType
  ) => void;
  currentTabId: string;
}

const Tab: FC<Props> = ({
  tabs,
  onChange,
  currentTabId,
}) => {
  return (
    <section
      className={
        styles.tabWrapper
      }
    >
      {tabs.map((item) => (
        <Item
          key={item.id}
          onChange={() =>
            onChange(item.id)
          }
          currentTabId={
            currentTabId
          }
          {...item}
        />
      ))}
    </section>
  );
};

export default Tab;
