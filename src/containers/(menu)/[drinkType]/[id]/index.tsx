'use client';
import { FC, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAtom } from 'jotai';
import { IoIosArrowBack } from 'react-icons/io';

import { drinkAtom } from '@/atoms/drink';
import MenuItemDetail from '@/components/MenuItemDetail';
import { getDrinkDetailById } from '@/services/supabase/getDrinkDetailById';

import styles from './itemDetail.module.scss';

interface Props {
  params: {
    drinkType: string;
    id: string;
  };
}

const MenuDetailContainer: FC<Props> = ({ params }) => {
  const router = useRouter();
  const [drinkDetail, setDrinkDetail] = useAtom(drinkAtom);

  const handleClickClose = () => {
    router.back();
  };

  useEffect(() => {
    if (drinkDetail === null) {
      (async () => {
        const detail = await getDrinkDetailById(params.drinkType, params.id);
        if (detail.length) {
          setDrinkDetail(detail[0]);
        } else {
          setDrinkDetail({
            id: '',
            description: '',
            alcoholDegree: 0,
            name: '',
          });
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!drinkDetail?.id) {
    return <span>주류 정보를 찾을 수 없습니다. 초기 화면으로 돌아갑니다.</span>;
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
