import { FC } from 'react';

import styles from './information.module.css';

interface Props {
  description: string;
  alcoholDegree: number;
  recipe: string;
}

const Information: FC<Props> = ({ description, alcoholDegree, recipe }) => {
  return (
    <div className={styles.informationContainer}>
      <h3>Information</h3>
      <div className={styles.detail}>
        <div className={styles.key}>설명</div>
        <div className={styles.content}>{description}</div>
      </div>
      <div className={styles.detail}>
        <div className={styles.key}>도수</div>
        <div className={styles.content}>{alcoholDegree}</div>
      </div>
      {recipe && (
        <div className={styles.detail}>
          <div className={styles.key}>제조법</div>
          <div className={styles.content}>{recipe}</div>
        </div>
      )}
    </div>
  );
};

export default Information;
