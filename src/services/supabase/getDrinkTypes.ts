import { TabItem } from '@/types/tab';
import { camelize } from '@/utils/camelize';
import { supabaseServerClient } from '@/utils/supabase/server';

export const getDrinkTypes = async () => {
  try {
    const supabase = await supabaseServerClient();
    const { data: drinkTypes } = await supabase.from('DRINK_TYPE').select('*');

    const camelizedDrinkTypes: TabItem[] = camelize(drinkTypes ?? []);

    return camelizedDrinkTypes ?? [];
  } catch (error) {
    console.error('Supabase query error', error);
    return [];
  }
};
