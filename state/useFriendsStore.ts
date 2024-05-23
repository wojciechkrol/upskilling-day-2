import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Profile } from '~/types/Profile';

interface State {
  friends: Profile[];

  addFriend: (friend: Profile) => void;
  removeFriend: (friend: Profile) => void;
}

export const useFriendsStore = create<State>()(
  persist(
    (set, get) => ({
      friends: [],

      addFriend: (friend: Profile) =>
        set((state) => {
          if (!state.friends.find((f) => JSON.stringify(f) === JSON.stringify(friend))) {
            return { friends: [...state.friends, friend] };
          }

          return {};
        }),
      removeFriend: (friend: Profile) =>
        set((state) => ({
          friends: state.friends.filter((f) => JSON.stringify(f) !== JSON.stringify(friend)),
        })),
    }),
    {
      name: 'friends',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
