import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';
import Routes from './src/routes';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Routes />
  );
}


