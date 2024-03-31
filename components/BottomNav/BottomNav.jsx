import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// dummy screens
const AmbitionsScreen = () => {/* ... */};
const FundsScreen = () => {/* ... */};
const LearnScreen = () => {/* ... */};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ambitions"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Ambitions') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Funds') {
            iconName = focused ? 'finance' : 'finance-outline';
          } else if (route.name === 'Learn') {
            iconName = focused ? 'school' : 'school-outline';
          }
          // You can return any component that you like here
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false // if you don't want to show the header
      })}
    >
      <Tab.Screen name="Ambitions" component={AmbitionsScreen} />
      <Tab.Screen name="Funds" component={FundsScreen} />
      <Tab.Screen name="Learn" component={LearnScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
