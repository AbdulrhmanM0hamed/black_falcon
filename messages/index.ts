import { cache } from "react";

import type { Locale } from "@/types/content";

import { ar } from "./ar";
import { en } from "./en";

const dictionaries = {
  en,
  ar,
} as const;

export const getDictionary = cache(async (locale: Locale) => dictionaries[locale]);
