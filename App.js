import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { View } from 'react-native';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
      <NativeRouter>
        <Main/>
      </NativeRouter>
  );
}
