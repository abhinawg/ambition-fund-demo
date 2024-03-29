import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../../components/Header/Header';
import NavigationTabs from '../../components/NavigationTabs/NavigationTabs';

const HomeScreen = () => {
    return (
        <NavigationContainer>
            <View style={styles.homeContainer}>
                <Header />
                <NavigationTabs />
            </View>
        </NavigationContainer>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
    },
});