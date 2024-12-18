import { Tabs } from 'expo-router';
import React from 'react';

import { Text, StyleSheet } from 'react-native';

// import { Header } from '@/app/components/header';

export default function TabLayout() {

  return (
    <>
      {/* <Header image={(require("@/assets/images/react-logo.png"))} /> */}
      <Tabs screenOptions={{ tabBarStyle: styles.fundo,  tabBarActiveTintColor: '#502410', tabBarInactiveTintColor: '#825E41FF', tabBarActiveBackgroundColor: "#ecce87" }}>
        <Tabs.Screen name='index' options={{ headerShown: false, tabBarIcon: () => (<Text>🍞</Text>) }}></Tabs.Screen>
        <Tabs.Screen name='produtos' options={{ headerShown: false, tabBarIcon: () => (<Text>📜</Text>) }}></Tabs.Screen>
        <Tabs.Screen name='carrinho' options={{ headerShown: false, tabBarIcon: () => (<Text>🛒</Text>) }}></Tabs.Screen>
        <Tabs.Screen name='perfil' options={{ headerShown: false, tabBarIcon: () => (<Text>🙂</Text>) }}></Tabs.Screen>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#f3de9f"
  }
});
