import { AntDesign, Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Card',
          tabBarIcon: ({ color }) => <AntDesign name="idcard" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color }) => <Feather name="users" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: 'Scanner',
          tabBarIcon: ({ color }) => <AntDesign name="camera" color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
