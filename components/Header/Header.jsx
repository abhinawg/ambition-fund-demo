import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (

    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Hi, {userName="manoj"}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="bell-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="account-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 24,
    backgroundColor: '#fff',
  },

  greetingText: {
    fontSize: 18,
    color: '#000', // Adjust the color to match your design
  },

  iconsContainer: {
    flexDirection: 'row',
  },

  icon: {
    width: 36,
    height: 36,
    // marginLeft: 15,
  },
});

export default Header;
