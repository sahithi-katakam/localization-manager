
import { create } from 'zustand';

export interface Translation {
  value: string;
  updatedAt: string;
  updatedBy: string;
}

export interface TranslationKey {
  id: string;
  key: string; // e.g., "button.save"
  category: string; // e.g., "buttons"
  description?: string;
  translations: {
    [languageCode: string]: Translation;
  };
}

interface TranslationStore {
  translationKeys: TranslationKey[];
  searchQuery: string;
  setTranslationKeys: (keys: TranslationKey[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useTranslationStore = create<TranslationStore>((set) => ({
  translationKeys: [],
  searchQuery: '',
  setTranslationKeys: (keys) => set({ translationKeys: keys }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
