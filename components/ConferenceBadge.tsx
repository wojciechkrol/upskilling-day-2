import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import QRCode from 'react-qr-code';
import { Profile } from '~/types/Profile';
import { generateGradient } from '~/utils/colors';

interface Props extends Profile {}

export default function ConferenceBadge({ type, role, name, position, company }: Props) {
  const qrCodeValue: Profile = { type, role, name, position, company };

  return (
    <View className="h-[550px] flex-col overflow-hidden rounded-[40px] bg-white">
      <View className="px-10 py-5">
        <Text className="text-3xl font-bold">hello.</Text>
      </View>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={generateGradient(type)}
        className="flex-1 justify-between px-10 py-5">
        <View>
          <Text
            className={`text-xl font-light ${type === 'pink' ? 'text-fuchsia-800' : 'text-blue-800'}`}>
            24 May 2024, Kraków, Poland
          </Text>
          <Text
            className={`text-4xl font-bold ${type === 'pink' ? 'text-fuchsia-700' : 'text-blue-700'}`}>
            Binary Minds Conf
          </Text>
        </View>
        <View className="items-center">
          <View className="rounded-2xl bg-white p-4">
            <QRCode value={JSON.stringify(qrCodeValue)} size={150} />
            <Text className="mt-4 text-center text-sm font-extrabold text-black">
              @BinaryMindsConf
            </Text>
          </View>
        </View>
        <View>
          <Text
            className={`text-xl font-light uppercase ${type === 'pink' ? 'text-fuchsia-600' : 'text-blue-800'}`}>
            {role}
          </Text>
          <Text
            className={`text-4xl font-bold ${type === 'pink' ? 'text-fuchsia-500' : 'text-blue-700'}`}>
            {name}
          </Text>
          <Text className={`text-xl ${type === 'pink' ? 'text-fuchsia-600' : 'text-blue-800'}`}>
            {position} @ {company}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
