import { FC } from "react";
import styles from "./tab.module.css";
import { TabType } from "@/types/tab";

interface Props {
  id: TabType;
  name: string;
  onChange: VoidFunction;
  currentTabId: string;
}

const Item: FC<Props> = ({
  id,
  name,
  onChange,
  currentTabId,
}) => {
  return (
    <label
      className={styles.item}
    >
      <input
        type="radio"
        name="drinkTypeTab"
        checked={
          currentTabId === id
        }
        onChange={onChange}
      />
      {name}
    </label>
  );
};

export default Item;
