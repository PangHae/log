import { DrinkDetail } from "@/types/common";
import { atom } from "jotai";

export const drinkAtom =
  atom<DrinkDetail | null>(
    null
  );
