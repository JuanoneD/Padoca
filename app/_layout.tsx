import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { Inter_900Black,useFonts } from '@expo-google-fonts/inter';
import { useEffect } from 'react';

import { StyleSheet, Text } from 'react-native';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();




// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Inter:Inter_900Black
  });

  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="register"  options={{headerShown:false}}></Stack.Screen>
    </Stack>
  );
}

const style = StyleSheet.create({
  white:{
    color:"#ffffff"
  }
});
