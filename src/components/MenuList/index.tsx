import { COCKTAILS } from "@/data/cocktail";
import { CocktailDetail } from "@/types/cocktail";
import { TabType } from "@/types/tab";
import { FC } from "react";
import MenuItem from "../MenuItem";
import styles from "./menuList.module.css";
import { DrinkDetail } from "@/types/common";
import { WHISKYS } from "@/data/whisky";
import { ETCS } from "@/data/etc";

interface Props {
  currentTabId: TabType;
  onClick: (
    value: DrinkDetail
  ) => void;
}

const MenuList: FC<Props> = ({
  currentTabId,
  onClick,
}) => {
  const menu: {
    [
      key: TabType
    ]: DrinkDetail[];
  } = {
    cocktail: COCKTAILS,
    whisky: WHISKYS,
    etc: ETCS,
  };

  return (
    <section
      className={styles.list}
    >
      {menu[currentTabId].map(
        (value) => (
          <MenuItem
            key={value.id}
            onClick={() =>
              onClick(value)
            }
            detail={value}
          />
        )
      )}
    </section>
  );
};

export default MenuList;
