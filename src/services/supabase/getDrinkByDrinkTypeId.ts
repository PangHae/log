import { DrinkDetail } from '@/types/common';
import { TabType } from '@/types/tab';
import { camelize } from '@/utils/camelize';
import { supabaseServerClient } from '@/utils/supabase/server';

export const getDrinkByDrinkTypeId = async (drinkType: TabType) => {
  try {
    const supabase = await supabaseServerClient();
    const { data: drinks } = await supabase
      .from('DRINK')
      .select('*')
      .eq('drink_type_id', drinkType);

    const camelizedDrinks: DrinkDetail[] = camelize(drinks ?? []);

    return camelizedDrinks;
  } catch (error) {
    console.error('Supabase Error :', error);
    return [];
  }
};
