
import { create } from "zustand";

export const useStore = create((set) => ({
  loggedIn: false,
  userId: null, // 👈 store the Supabase auth.users.id here

  setLoggedIn: (value) => set({ loggedIn: value }),
  setUserId: (id) => set({ userId: id }), // 👈 updater for userId
}));
