import React from 'react';
import {AppLoading} from 'expo'
import { StatusBar, Text, View } from 'react-native';
import Routes from './src/routes'
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <Routes />
    </>
  );
}

export default App

