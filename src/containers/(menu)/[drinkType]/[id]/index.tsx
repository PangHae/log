'use client';
import { drinkAtom } from '@/atoms/drink';
import MenuItemDetail from '@/components/MenuItemDetail';
import { COCKTAILS } from '@/data/cocktail';
import { ETCS } from '@/data/etc';
import { WHISKYS } from '@/data/whisky';
import { DrinkDetail } from '@/types/common';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import styles from './itemDetail.module.css';
import { IoIosArrowBack } from 'react-icons/io';

interface Props {
  params: {
    drinkType: string;
    id: string;
  };
}

type DrinkTypeDataMap = Record<'cocktail' | 'whisky' | 'etc', DrinkDetail[]>;

const MenuDetailContainer: FC<Props> = ({ params }) => {
  const router = useRouter();
  const [drinkDetail, setDrinkDetail] = useAtom(drinkAtom);

  const drinkTypeDataMap: DrinkTypeDataMap = {
    cocktail: COCKTAILS,
    whisky: WHISKYS,
    etc: ETCS,
  };

  const handleClickClose = () => {
    router.back();
  };

  useEffect(() => {
    if (drinkDetail === null) {
      const [item] = drinkTypeDataMap[
        params.drinkType as keyof DrinkTypeDataMap
      ].filter((value) => value.id === params.id);
      setDrinkDetail(item);
    }
  }, [drinkDetail]);

  if (drinkDetail === null) {
    return null;
  }

  return (
    <main className={styles.detailContainer}>
      <header className={styles.header} onClick={handleClickClose}>
        <button className={styles.backSpace}>
          <IoIosArrowBack size={18} />
        </button>
        <h1 className={styles.name}>{drinkDetail.name}</h1>
      </header>
      {drinkDetail && <MenuItemDetail drinkDetail={drinkDetail} />}
    </main>
  );
};

export default MenuDetailContainer;
