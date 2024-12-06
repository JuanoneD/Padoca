import { Tabs } from 'expo-router';
import React from 'react';

import { Text } from 'react-native';

// import { Header } from '@/app/components/header';

export default function TabLayout() {

  return (
    <>
      {/* <Header image={(require("@/assets/images/react-logo.png"))} /> */}
      <Tabs>
<<<<<<< HEAD
        <Tabs.Screen name='index' options={{ headerShown: false, tabBarIcon: () => (<Text>🍞</Text>) }}></Tabs.Screen>
        <Tabs.Screen name='produtos' options={{ headerShown: false, tabBarIcon: () => (<Text>📜</Text>) }}></Tabs.Screen>
        <Tabs.Screen name='carrinho' options={{ headerShown: false, tabBarIcon: () => (<Text>🛒</Text>) }}></Tabs.Screen>
=======
        <Tabs.Screen name='index' options={{ headerShown: false, tabBarIcon: () => (<Text>😘</Text>) }}></Tabs.Screen>
        {/* <Tabs.Screen name='produtos' options={{ headerShown: false, tabBarIcon: () => (<Text>😎</Text>) }}></Tabs.Screen> */}
        <Tabs.Screen name='perfil' options={{ headerShown: false, tabBarIcon: () => (<Text>😎</Text>) }}></Tabs.Screen>
>>>>>>> 5c47d69d99940db264da81d192f4d7dd23f5fa11
      </Tabs>
    </>
  );
}
