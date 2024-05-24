import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ConferenceBadge from '~/components/ConferenceBadge';
import TextField from '~/components/TextField';
import TypeField from '~/components/TypeField';
import { useProfileStore } from '~/state/useProfileStore';

export default function MyCardScreen() {
  const {
    type,
    company,
    name,
    position,
    role,
    setType,
    setCompany,
    setName,
    setPosition,
    setRole,
  } = useProfileStore();
  const insets = useSafeAreaInsets();

  return (
    <>
      <Tabs.Screen options={{ headerShown: false }} />
      <KeyboardAwareScrollView className="flex-1 bg-zinc-100" style={{ marginTop: insets.top }}>
        <View className="m-5 shadow-md shadow-zinc-300">
          <ConferenceBadge
            type={type}
            role={role}
            name={name}
            position={position}
            company={company}
          />
        </View>
        <View className="mx-5 mt-6">
          <TypeField label="Select Your Theme" value={type} onChange={setType} />
          <TextField label="Role" value={role} onChangeText={setRole} />
          <TextField label="Your Name" value={name} onChangeText={setName} />
          <TextField label="Job Title" value={position} onChangeText={setPosition} />
          <TextField label="Company" value={company} onChangeText={setCompany} />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}
