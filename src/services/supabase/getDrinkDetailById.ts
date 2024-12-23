import camelcaseKeys from 'camelcase-keys';

import { DrinkDetail } from '@/types/common';
import { TabType } from '@/types/tab';
import { supabaseClient } from '@/utils/supabase/client';

export const getDrinkDetailById = async (
  drinkType: TabType,
  drinkId: string,
) => {
  try {
    const supabase = await supabaseClient();
    const { data: drinkDetail } = await supabase
      .from('DRINK')
      .select('*')
      .eq('drink_type_id', drinkType)
      .eq('id', drinkId);
    const camelizedDrinkDetail: DrinkDetail[] = camelcaseKeys(
      drinkDetail ?? [],
    );

    return camelizedDrinkDetail;
  } catch (error) {
    console.error(error);
    return [];
  }
};
