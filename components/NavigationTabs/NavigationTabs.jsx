// SearchTabs.js
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AmbitionDetailsScreen from '../../screens/AmbitionDetailsScreen/AmbitionDetailsScreen.jsx';

const Tab = createMaterialTopTabNavigator();

// const AmbitionScreen = () => <View />;
const FriendsScreen = () => <View />;

const NavigationTabs = () => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Ambition" component={AmbitionDetailsScreen} />
                <Tab.Screen name="Friends" component={FriendsScreen} />
            </Tab.Navigator>
        </>
    );
};


export default NavigationTabs;
