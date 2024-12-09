'use client';
import Link from 'next/link';
import { FC } from 'react';
import styles from './menuItem.module.css';
import { type DrinkDetail } from '@/types/common';
import { useAtomValue } from 'jotai';
import { tabIdAtom } from '@/atoms/tab';
import { IoIosArrowForward } from 'react-icons/io';

interface Props {
  detail: DrinkDetail;
  onClick: VoidFunction;
}

const MenuItem: FC<Props> = ({ detail, onClick }) => {
  const { id, name, alcoholDegree } = detail;
  const drinkType = useAtomValue(tabIdAtom);

  return (
    <Link
      className={styles.item}
      href={`/${drinkType}/${id}`}
      onClick={onClick}
    >
      <article className={styles.body}>
        <span>{name}</span>
        <span>
          {`${alcoholDegree}%`} <IoIosArrowForward />
        </span>
      </article>
    </Link>
  );
};

export default MenuItem;
