import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.greetingText}>Hi, Manoj</Text>
      <View style={styles.iconsContainer}>
        <Pressable onPress={() => alert('Notifications')}>
          {/* <Image
            source={require('./path-to-notification-icon.png')} // replace with your local image path
            style={styles.icon}
          /> */}
        </Pressable>
        <Pressable>
          <Image
            source={require('../../assets/icons/user_thumb.svg')} // replace with your local image path
            style={styles.icon}
          />
        </Pressable>
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
