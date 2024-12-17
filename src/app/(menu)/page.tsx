'use server';

import Menu from '@/containers/(menu)';
import { getDrinkTypes } from '@/services/supabase/getDrinkTypes';

const MenuPage = async () => {
  const drinkTypes = await getDrinkTypes();

  return <Menu drinkTypes={drinkTypes} />;
};

export default MenuPage;
