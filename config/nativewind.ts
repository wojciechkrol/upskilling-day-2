import { CameraView } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';

cssInterop(CameraView, {
  className: 'style',
});

cssInterop(LinearGradient, {
  className: 'style',
});
