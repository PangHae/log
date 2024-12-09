import { FC } from 'react';

import { TabType } from '@/types/tab';

import styles from './tab.module.css';

interface Props {
  id: TabType;
  name: string;
  onChange: VoidFunction;
  currentTabId: string;
}

const Item: FC<Props> = ({ id, name, onChange, currentTabId }) => {
  return (
    <label className={styles.item}>
      <input
        className={styles.input}
        type="radio"
        name="drinkTypeTab"
        checked={currentTabId === id}
        onChange={onChange}
      />
      {name}
    </label>
  );
};

export default Item;
