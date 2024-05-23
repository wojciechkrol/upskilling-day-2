import { useIsFocused } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AnimatePresence, MotiView } from 'moti';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import ConferenceBadge from '~/components/ConferenceBadge';
import { useFriendsStore } from '~/state/useFriendsStore';
import { Profile } from '~/types/Profile';
import { validateProfile } from '~/utils/validator';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const isFocused = useIsFocused();
  const [scannedProfile, setScannedProfile] = useState<Profile | null>(null);
  const { addFriend } = useFriendsStore();

  const handleBarcodeScanned = (data: string) => {
    if (scannedProfile) {
      return;
    }

    const profile = JSON.parse(data);
    if (validateProfile(profile)) {
      addFriend(profile);
      setScannedProfile(profile);
    }
  };

  const clearScannedProfile = () => {
    setScannedProfile(null);
  };

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
          <CameraView
            className="flex-1"
            barcodeScannerSettings={{
              barcodeTypes: ['qr'],
            }}
            onBarcodeScanned={(data) => {
              handleBarcodeScanned(data.data);
            }}>
            <AnimatePresence>
              {scannedProfile !== null && (
                <MotiView
                  from={{ opacity: 0, translateY: 100, backgroundColor: 'rgba(0,0,0,0.0)' }}
                  animate={{ opacity: 1, translateY: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                  exit={{ opacity: 0, translateY: 100, backgroundColor: 'rgba(0,0,0,0.0)' }}
                  transition={{ type: 'timing', duration: 300 }}
                  className="flex-1">
                  <Pressable
                    onPress={clearScannedProfile}
                    className="flex-1 items-center justify-center">
                    <ConferenceBadge {...scannedProfile!} />
                  </Pressable>
                </MotiView>
              )}
            </AnimatePresence>
          </CameraView>
        )}
      </View>
    </>
  );
}
