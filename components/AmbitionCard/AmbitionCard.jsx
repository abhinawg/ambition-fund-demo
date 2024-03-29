import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AmbitionCard = ({ title, savedAmount, goalAmount, progress, partnerCount, friendsCount }) => {
  const safeProgress = Math.min(100, Math.max(0, progress));
  const progressBarWidth = `${safeProgress}%`;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: progressBarWidth }]} />
      </View>
      <Text>Amount Saved {parseFloat(savedAmount) / parseFloat(goalAmount)}%</Text>
      <Text style={styles.amountSaved}>₹{savedAmount} out of ₹{goalAmount}</Text>
      <View style={styles.statsContainer}>
        <TouchableOpacity style={styles.statButton}>
          {/* <Image source={require('./path-to-partner-icon.png')} style={styles.icon} /> */}
          <Text>Partner</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>+{partnerCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statButton}>
          {/* <Image source={require('./path-to-friends-icon.png')} style={styles.icon} /> */}
          <Text>Friends</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>+{friendsCount}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '98%',
    height: 186,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  progressBarBackground: {
    height: 10,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    marginTop: 20,
    overflow: 'hidden',
  },

  progressBarFill: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#4B9CD3',
  },

  amountSaved: {
    fontSize: 14,
    marginVertical: 10,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  statButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 24,
    height: 24,
  },

  counter: {
    backgroundColor: '#E0E0E0', // Adjust color according to your design
    borderRadius: 15,
    padding: 4,
    marginLeft: 4,
  },

  counterText: {
    fontSize: 12,
  },
});

export default AmbitionCard;

