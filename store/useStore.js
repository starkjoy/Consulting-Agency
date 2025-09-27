import { create } from 'zustand';

export const useStore = create((set) => ({
  loggedIn: false,
  setLoggedIn: (value) => set({ loggedIn: value }),
}));
