// SearchBox.js
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBox = ({ onFilterPress, onSettingsPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Ambition"
        style={styles.input}
      />
      <TouchableOpacity onPress={onFilterPress}>
        <MaterialCommunityIcons name="filter" size={24} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSettingsPress}>
        <MaterialCommunityIcons name="cog-outline" size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 48,
    marginRight: 10,
    padding: 16,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    borderRadius: 6,
  },
  icon: {
    marginLeft: 8,
  }
});

export default SearchBox;
