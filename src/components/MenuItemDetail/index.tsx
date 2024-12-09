import { DrinkDetail } from '@/types/common';
import Image from 'next/image';
import { FC } from 'react';
import Information from '../Information';
import Button from '../Button';
import BottomFixed from '../layout/BottomFixed';
import { IoIosBasket } from 'react-icons/io';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import styles from './menuItemDetail.module.css';

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
