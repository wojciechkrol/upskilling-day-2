import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { Profile } from '~/types/Profile';
import { generateGradient } from '~/utils/colors';

export default function FriendListItem(profile: Profile) {
  return (
    <LinearGradient
      colors={generateGradient(profile.type)}
      start={[0, 0]}
      end={[1, 1]}
      className="h-[96px] w-full justify-center rounded-xl p-5">
      <Text
        className={`text-[14px] font-light uppercase ${profile.type === 'pink' ? 'text-fuchsia-700' : 'text-blue-700'}`}>
        {profile.role}
      </Text>
      <Text
        className={`text-[18px] font-bold ${profile.type === 'pink' ? 'text-fuchsia-700' : 'text-blue-700'}`}>
        {profile.name}
      </Text>
      <Text
        className={`text-[16px] ${profile.type === 'pink' ? 'text-fuchsia-600' : 'text-blue-800'}`}>
        {profile.position} @ {profile.company}
      </Text>
    </LinearGradient>
  );
}
