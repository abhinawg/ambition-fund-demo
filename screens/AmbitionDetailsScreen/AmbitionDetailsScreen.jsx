import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import AmbitionCard from '../../components/AmbitionCard/AmbitionCard.jsx';

const AmbitionDetailsScreen = () => {
  return (
    // <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <SearchBox />
        <View style={styles.categoryTitle}>
          <Text style={styles.title}>Travel</Text>
          <View style={styles.countContainer}>
            <Text style={styles.titleCount}>7</Text>
          </View>
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

        <View style={styles.categoryTitle}>
          <Text style={styles.title}>Travel</Text>
          <View style={styles.countContainer}>
            <Text style={styles.titleCount}>7</Text>
          </View>
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
    // </ScrollView>

  );
};

const styles = StyleSheet.create({

  scrollView: {
    // flex: 1,
  },

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
    alignSelf: 'flex-start',
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },

  countContainer: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginRight: 20,
  },

  titleCount: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default AmbitionDetailsScreen;
