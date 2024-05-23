import { Text, TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

export default function TextField({ label, ...props }: Props) {
  return (
    <View className="mb-3">
      <Text className="text-lg font-medium text-zinc-600">{label}</Text>
      <TextInput
        className="rounded-lg border-[1px] border-zinc-300 bg-white px-3 py-5 text-[16px]"
        textContentType="none"
        autoCorrect={false}
        {...props}
      />
    </View>
  );
}
