import { atom } from 'jotai';

import { DrinkDetail } from '@/types/common';

export const drinkAtom = atom<DrinkDetail | null>(null);
