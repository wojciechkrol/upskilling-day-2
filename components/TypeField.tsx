import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';
import { ProfileType } from '~/types/Profile';
import { generateGradient } from '~/utils/colors';

interface Props {
  label: string;
  value: ProfileType;
  onChange: (type: ProfileType) => void;
}

export default function TypeField({ label, value, onChange }: Props) {
  return (
    <View className="mb-3">
      <Text className="text-lg font-medium text-zinc-600">{label}</Text>

      <View className="mt-2 flex-row gap-2">
        <Pressable
          className={`size-[64px] flex-shrink overflow-hidden rounded-3xl border-[2px] border-zinc-300 bg-white ${value === 'pink' ? 'border-fuchsia-400' : 'border-zinc-100'}`}
          onPress={() => onChange('pink')}>
          <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={generateGradient('pink')}
            className="flex-1"
          />
        </Pressable>
        <Pressable
          className={`size-[64px] flex-shrink overflow-hidden rounded-3xl border-[2px] border-zinc-300 bg-white ${value === 'blue' ? 'border-blue-400' : 'border-zinc-100'}`}
          onPress={() => onChange('blue')}>
          <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={generateGradient('blue')}
            className="flex-1"
          />
        </Pressable>
      </View>
    </View>
  );
}
