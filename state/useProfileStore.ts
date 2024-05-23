import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Profile, ProfileType } from '~/types/Profile';

interface State extends Profile {
  setType: (type: ProfileType) => void;
  setRole: (role: string) => void;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
  setCompany: (company: string) => void;
}

export const useProfileStore = create<State>()(
  persist(
    (set, get) => ({
      type: 'pink',
      role: 'VIP',
      name: 'Anna Doe',
      position: 'Software Engineer',
      company: 'Binary Minds',

      setType: (type: ProfileType) => set({ type }),
      setRole: (role: string) => set({ role }),
      setName: (name: string) => set({ name }),
      setPosition: (position: string) => set({ position }),
      setCompany: (company: string) => set({ company }),
    }),
    {
      name: 'profile',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
