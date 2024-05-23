import { useIsFocused } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (permission?.granted) {
      return;
    }

    requestPermission();
  }, []);

  if (!isFocused) {
    return <Tabs.Screen options={{ headerShown: false }} />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Tabs.Screen options={{ headerShown: false }} />
      <View className="flex-1">
        {permission?.granted === false ? (
          <View className="flex-1 items-center justify-center">
            <Text>Camera permission is required to use this feature.</Text>
          </View>
        ) : (
          <CameraView className="flex-1" />
        )}
      </View>
    </>
  );
}
