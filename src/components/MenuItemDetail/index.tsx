import { FC } from 'react';

import Image from 'next/image';

import { IoIosBasket, IoIosCheckmarkCircle } from 'react-icons/io';

import { DrinkDetail } from '@/types/common';

import Button from '../Button';
import Information from '../Information';
import styles from './menuItemDetail.module.scss';
import BottomFixed from '../layout/BottomFixed';

interface Props {
  drinkDetail: DrinkDetail;
}

const MenuItemDetail: FC<Props> = ({ drinkDetail }) => {
  return (
    <section className={styles.menuItemDetailContainer}>
      <Image
        src={'https://placehold.co/300.png'}
        alt={'wow'}
        width={300}
        height={300}
      />
      <Information
        description={drinkDetail.description}
        alcoholDegree={drinkDetail.alcoholDegree}
        recipe={drinkDetail.recipe || ''}
      />
      <BottomFixed>
        <Button>
          <IoIosBasket size={14} />
          장바구니
        </Button>
        <Button className="main">
          <IoIosCheckmarkCircle size={14} />
          주문하기
        </Button>
      </BottomFixed>
    </section>
  );
};

export default MenuItemDetail;
