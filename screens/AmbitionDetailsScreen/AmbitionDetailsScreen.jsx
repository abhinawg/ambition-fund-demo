import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import AmbitionCard from '../../components/AmbitionCard/AmbitionCard.jsx';

const AmbitionDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBox />
      <View style={ styles.categoryTitle}>
        <Text style={styles.title}>Travel</Text>
        <Text>7</Text>
      </View>
      <View style={styles.cardContainer}>
        <AmbitionCard
          title="New Bike"
          savedAmount="60,000"
          goalAmount="1,00,000"
          progress={40}
          partnerCount={3}
          friendsCount={3} />

        <AmbitionCard
          title="New Bike"
          savedAmount="60,000"
          goalAmount="1,00,000"
          progress={40}
          partnerCount={3}
          friendsCount={3} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff'
  },

  categoryTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'left',
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AmbitionDetailsScreen;
