'use server';

import Menu from '@/containers/(menu)';
import { getDrinkByDrinkTypeId } from '@/services/supabase/getDrinkByDrinkTypeId';
import { getDrinkTypes } from '@/services/supabase/getDrinkTypes';

const MenuPage = async () => {
  const drinkTypes = await getDrinkTypes();
  const whisky = await getDrinkByDrinkTypeId('whisky');
  const cocktail = await getDrinkByDrinkTypeId('cocktail');
  const etc = await getDrinkByDrinkTypeId('etc');

  return (
    <Menu
      drinkTypes={drinkTypes}
      drinks={{
        whisky,
        cocktail,
        etc,
      }}
    />
  );
};

export default MenuPage;
