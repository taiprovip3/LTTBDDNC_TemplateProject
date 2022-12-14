import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './components/Homepage';
import MouseGame from './components/MouseGame';
import FlyGame from './components/FlyGame';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Homepage' component={Homepage} />
            <Stack.Screen name='MouseGame' component={MouseGame} />
            <Stack.Screen name='FlyGame' component={FlyGame} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}