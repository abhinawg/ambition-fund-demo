import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen/HomeScreen';

// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}