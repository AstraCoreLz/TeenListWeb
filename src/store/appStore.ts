import { create } from 'zustand';
import { ViewMode } from '../types';

interface AppState {
  viewMode: ViewMode;
  searchQuery: string;
  selectedTags: string[];
  setViewMode: (mode: ViewMode) => void;
  setSearchQuery: (query: string) => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  viewMode: 'teams',
  searchQuery: '',
  selectedTags: [],
  setViewMode: (mode) => set({ viewMode: mode }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleTag: (tag) => set((state) => ({
    selectedTags: state.selectedTags.includes(tag)
      ? state.selectedTags.filter(t => t !== tag)
      : [...state.selectedTags, tag]
  })),
  clearFilters: () => set({ searchQuery: '', selectedTags: [] })
}));