import { FC } from 'react';

import MenuDetailContainer from '@/containers/(menu)/[drinkType]/[id]';

interface Props {
  params: Promise<{
    drinkType: string;
    id: string;
  }>;
}

const MenuDetailPage: FC<Props> = async ({ params }) => {
  return <MenuDetailContainer params={await params} />;
};

export default MenuDetailPage;
