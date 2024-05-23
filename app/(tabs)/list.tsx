import { FlatList, Text, View } from 'react-native';
import FriendListItem from '~/components/FriendListItem';
import { useFriendsStore } from '~/state/useFriendsStore';

export default function FriendsScreen() {
  const { friends } = useFriendsStore();

  if (friends.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-zinc-600">No friends yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      className="flex-1 p-5"
      data={friends}
      renderItem={({ item }) => <FriendListItem {...item} />}
      ItemSeparatorComponent={() => <View className="h-5" />}
    />
  );
}
