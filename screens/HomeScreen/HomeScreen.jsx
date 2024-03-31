import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, FlatList, ScrollView } from 'react-native'; import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header/Header';

import NavigationTabs from '../../components/NavigationTabs/NavigationTabs';
import AmbitionDetailsScreen from '../AmbitionDetailsScreen/AmbitionDetailsScreen';
import FriendsDetailsScreen from '../FriendsDetailsScreen/FriendsDetailsScreen';

const data = [
  { key: 'home', label: 'Home', iconName: 'home' },
  { key: 'retirement', label: 'Retirement', iconName: 'bank' },
  { key: 'marriage', label: 'Marriage', iconName: 'ring' },
  { key: 'child', label: 'Child', iconName: 'baby-carriage' },
  { key: 'home', label: 'Home', iconName: 'home' },
  { key: 'retirement', label: 'Retirement', iconName: 'bank' },
  { key: 'marriage', label: 'Marriage', iconName: 'ring' },
  { key: 'child', label: 'Child', iconName: 'baby-carriage' },
  { key: 'home', label: 'Home', iconName: 'home' },
  { key: 'retirement', label: 'Retirement', iconName: 'bank' },
  { key: 'marriage', label: 'Marriage', iconName: 'ring' },
  { key: 'child', label: 'Child', iconName: 'baby-carriage' },
];

const CarouselItem = ({ label, iconName, iconColor }) => (
  <TouchableOpacity style={[styles.iconContainer, { backgroundColor: iconColor }]}>
    <MaterialCommunityIcons name={iconName} size={30} style={styles.iconStyle} />
    <Text style={styles.itemLabel}>{label}</Text>
  </TouchableOpacity>
);

// Enabling LayoutAnimation on Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const faqs = [
  {
    question: 'What is Ambition Funds',
    answer: 'Ambition Funds is a platform that helps you to...',
  },
  {
    question: 'Why trust ambition funds',
    answer: 'You can trust Ambition Funds because...',
  },
  {
    question: 'Why Ambitions are important',
    answer: 'Ambitions are important to plan financial freedom and less stress in future for money',
  },
];

const FAQItem = ({ item, expanded, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.faqQuestionContainer}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.questionHeader}>
        <Text style={styles.faqQuestion}>{item.question}</Text>
        <MaterialCommunityIcons
          name={expanded ? 'minus' : 'plus'}
          size={24}
          color="#303030"
        />
      </View>
      {expanded && <Text style={styles.faqAnswer}>{item.answer}</Text>}
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Ambition');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePress = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <Header />
      {/* <NavigationTabs /> */}

      {/* Ambitions and Friends Tab */}
      <View style={styles.tabsNavContainer}>
      <View style={styles.tabsContainer}>
        {/* Ambition Tab */}
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Ambition' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Ambition')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Ambition' && styles.activeTabText,
            ]}
          >
            Ambition
          </Text>
        </TouchableOpacity>

        {/* Friends Tab */}
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'Friends' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Friends')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Friends' && styles.activeTabText,
            ]}
          >
            Friends
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on active state */}
      {activeTab === 'Ambition' && <AmbitionDetailsScreen />}
      {activeTab === 'Friends' && <FriendsDetailsScreen />}
    </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => alert('New Ambition')}
          style={styles.ambitionButton}
        >
          <Text style={styles.ambitionButtonText}>+ New Ambition</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>
          "The big money is not in the buying and selling, but in the waiting"
        </Text>
        <Text style={styles.authorText}>- Charlie Munger</Text>
      </View>
      <Text style={styles.heading}>Ambition to reality</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <CarouselItem label={item.label} iconName={item.iconName} iconColor={item.iconColor} />}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      />

      {/* Ambition Card Section */}

      <View style={styles.ambitionCardContainer}>
        <Text style={styles.ambitionCardHeading}>Get started with your First Ambition</Text>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeaderContent}>
            <MaterialCommunityIcons name="check-circle" size={24} color="#00CCB4" style={styles.icon} />
            <Text style={[styles.stepText, { textDecorationLine: 'line-through', color: '#fff', opacity: 0.6 }]}>Login to ambition fund</Text>
          </View>
        </View>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeaderContent}>
            <MaterialCommunityIcons name="alert-circle" size={24} color="#FFDD9C" style={styles.icon} />
            <Text style={styles.stepText}>Add Your First Ambition</Text>
          </View>
          <View style={styles.stepBodyContent}>
            <Text style={styles.stepDescription}>In order to get started add your first ambition</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeaderContent}>
            <MaterialCommunityIcons name="alert-circle" size={24} color="#FFDD9C" style={styles.icon} />
            <Text style={styles.stepText}>Sync Up Your Funds</Text>
          </View>
          <View style={styles.stepBodyContent}>
            <Text style={styles.stepDescription}>Add funds to your ambition</Text>
            <TouchableOpacity style={[styles.addButton, { backgroundColor: '#fff', opacity: 0.3 }]}>
              <Text style={styles.addButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.stepContainer}>
          <View style={styles.stepHeaderContent}>
            <MaterialCommunityIcons name="alert-circle" size={24} color="#FFDD9C" style={styles.icon} />
            <Text style={styles.stepText}>Invite Your Collaborators</Text>
          </View>
          <View style={styles.stepBodyContent}>
            <Text style={styles.stepDescription}>Share ambitions with your friends/family & reduce tenure</Text>
            <TouchableOpacity style={[styles.addButton, { backgroundColor: '#fff', opacity: 0.3 }]}>
              <Text style={styles.addButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* goals section */}

      <View style={styles.goalSectionContainer}>
        <Text style={styles.goalHeading}>Make your ambitions true</Text>

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <MaterialCommunityIcons name="check-circle" size={24} color="#05A8AA" style={styles.icon} />
          <Text style={styles.subheading}>90% of the people just think on their goals/ambitions</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <MaterialCommunityIcons name="check-circle" size={24} color="#05A8AA" style={styles.icon} />
          <Text style={styles.subheading}>70% People Struggle With Finance Planning</Text>
        </View>

        <View style={styles.goalContainer}>
          <View style={[styles.goalCard, { backgroundColor: '#F9F5FF' }]}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
              <Text style={styles.goalIcon}>🏡</Text>
              <Text style={styles.goalTitle}>Home</Text>
            </View>
            <Text style={styles.goalPercentage}>
              <Text style={styles.goalPercentageNumber}>70% People</Text>{'\n'}
              <Text style={styles.goalPercentageText}>saves for this</Text>
            </Text>
            <TouchableOpacity
              onPress={() => alert('new goal added')}
              style={styles.addGoalButton}
            >
              <Text style={styles.addGoalButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.goalCard, { backgroundColor: '#FEFBE8' }]}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
              <Text style={styles.goalIcon}>👴</Text>
              <Text style={styles.goalTitle}>Retirement</Text>
            </View>
            <Text style={styles.goalPercentage}>
              <Text style={styles.goalPercentageNumber}>90% People</Text>{'\n'}
              <Text style={styles.goalPercentageText}>saves for this</Text>
            </Text>
            <TouchableOpacity
              onPress={() => alert('new goal added')}
              style={styles.addGoalButton}
            >
              <Text style={styles.addGoalButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.goalCard, { backgroundColor: '#E6F4D7' }]}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
              <Text style={styles.goalIcon}>👶</Text>
              <Text style={styles.goalTitle}>Child</Text>
            </View>
            <Text style={styles.goalPercentage}>
              <Text style={styles.goalPercentageNumber}>15% People</Text>{'\n'}
              <Text style={styles.goalPercentageText}>saves for this</Text>
            </Text>
            <TouchableOpacity
              onPress={() => alert('new goal added')}
              style={styles.addGoalButton}
            >
              <Text style={styles.addGoalButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.goalCard, { backgroundColor: '#FFF4ED' }]}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
              <Text style={styles.goalIcon}>💍</Text>
              <Text style={styles.goalTitle}>Marriage</Text>
            </View>
            <Text style={styles.goalPercentage}>
              <Text style={styles.goalPercentageNumber}>20% People</Text>{'\n'}
              <Text style={styles.goalPercentageText}>saves for this</Text>
            </Text>
            <TouchableOpacity
              onPress={() => alert('new goal added')}
              style={styles.addGoalButton}
            >
              <Text style={styles.addGoalButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => alert('view all goals')}
          style={styles.viewAllButton}
        >
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSectionContainer}>
        <Text style={styles.infoSectionHeader}>Need Help ?</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Message us now ?</Text>
          <MaterialCommunityIcons name="message-text" size={24} color="#0041B7" style={styles.messageIcon} />
        </View>
        <Text style={styles.subheader}>Learn to build <Text style={styles.subheaderHighlight}>Wealth</Text></Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardScrollContainer}>
          <View style={styles.infoCard}>
            {/* <Image source={require('./assets/profile.jpg')} style={styles.infoCardImage} /> */}
            <View style={styles.infoCardContent}>
              <Text style={styles.infoCardTitle}>How to save money in your 20's?</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Read More</Text>
              </TouchableOpacity>
              <Text style={styles.readTime}>2 min read</Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            {/* <Image source={require('./assets/profile.jpg')} style={styles.infoCardImage} /> */}
            <View style={styles.infoCardContent}>
              <Text style={styles.infoCardTitle}>How to save money in your 20's?</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Read More</Text>
              </TouchableOpacity>
              <Text style={styles.readTime}>2 min read</Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            {/* <Image source={require('./assets/profile.jpg')} style={styles.infoCardImage} /> */}
            <View style={styles.infoCardContent}>
              <Text style={styles.infoCardTitle}>How to save money in your 20's?</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Read More</Text>
              </TouchableOpacity>
              <Text style={styles.readTime}>2 min read</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.perspectiveContainer}>
          <Text style={styles.perspectiveHeader}>Read People's Prespective</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.perspectiveScrollContainer}
          >
            <View style={styles.perspectiveCard}>
              <View style={styles.perspectiveContent}>
                <MaterialCommunityIcons name="account-circle" size={36} style={styles.perspectiveProfileImage} />
                <Text style={styles.profileName}>Manoj Jain</Text>
              </View>
              <Text style={styles.perspectiveText}>
                I always thought to plan my investments but always failed to do that due to not having knowledge around that
              </Text>
            </View>
            <View style={styles.perspectiveCard}>
              <View style={styles.perspectiveContent}>
                <MaterialCommunityIcons name="account-circle" size={36} style={styles.perspectiveProfileImage} />
                <Text style={styles.profileName}>Manoj Jain</Text>
              </View>
              <Text style={styles.perspectiveText}>
                I always thought to plan my investments but always failed to do that due to not having knowledge around that
              </Text>
            </View>
            <View style={styles.perspectiveCard}>
              <View style={styles.perspectiveContent}>
                <MaterialCommunityIcons name="account-circle" size={36} style={styles.perspectiveProfileImage} />
                <Text style={styles.profileName}>Manoj Jain</Text>
              </View>
              <Text style={styles.perspectiveText}>
                I always thought to plan my investments but always failed to do that due to not having knowledge around that
              </Text>
            </View>

          </ScrollView>
        </View>
      </View>

      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        {faqs.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            expanded={expandedIndex === index}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>

    </ScrollView >
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    backgroundColor: '#fff',
  },

  tabsNavContainer: {
    flex: 1,
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
  },

  tab: {
    padding: 10,
  },

  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: 'blue', // Color for the active tab indicator
  },

  tabText: {
    color: 'black',
  },
  
  activeTabText: {
    fontWeight: 'bold',
  },

  buttonContainer: {
    width: '96%',
    paddingHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },

  ambitionButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  ambitionButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  quoteContainer: {
    width: '100%',
    padding: 20,
    marginTop: 14,
  },

  quoteText: {
    fontStyle: 'normal',
    fontSize: 28,
    color: '#000',
    opacity: 0.4,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: '700',
    lineHeight: 40,
  },

  authorText: {
    fontSize: 16,
    color: '#000',
    opacity: 0.3,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  carouselContainer: {
    paddingVertical: 10,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    width: 80,
    height: 80,
    borderRadius: 30,
  },

  iconStyle: {
    color: '#616161',
    marginBottom: 5,
  },

  itemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 16,
  },

  ambitionCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#133030',
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 16,
  },

  ambitionCardHeading: {
    width: '70%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },

  stepContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  stepHeaderContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#133030',
  },

  icon: {
    marginRight: 8,
  },

  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  stepBodyContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
    marginLeft: 28,
  },

  stepDescription: {
    fontSize: 14,
    color: '#bdc3c7',
  },

  addButton: {
    backgroundColor: '#EFECCA',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 8,
  },

  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },

  goalSectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
  },

  goalHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,

  },

  subheading: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 8,
    textAlign: 'left',
    color: '#000',
    opacity: 0.8,
  },

  goalContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 16,
  },

  goalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingTop: 16,
    paddingHorizontal: 12,
    margin: 8,
    width: 150,
  },

  goalIcon: {
    fontSize: 20,
    marginBottom: 8,
    padding: 4,
  },

  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 2,
  },

  goalPercentage: {
    fontSize: 14,
    marginVertical: 12,
    textAlign: 'left',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  goalPercentageNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    opacity: 1,
  },

  goalPercentageText: {
    color: '#000',
    opacity: 0.7,
  },

  addGoalButton: {
    width: '100%',
    backgroundColor: '#133030',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 6,
    marginBottom: 8,
  },

  addGoalButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
  },

  viewAllButton: {
    width: '96%',
    backgroundColor: '#133030',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'center',
  },

  viewAllButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
  },

  infoSectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  infoSectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#EBF2FF',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 10,
  },

  messageText: {
    fontSize: 16,
    marginRight: 8,
    padding: 4,
    textAlign: 'center',
  },

  messageIcon: {
    fontSize: 24,
    opacity: 0.8,
  },

  subheader: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },

  subheaderHighlight: {
    fontWeight: 'bold',
    color: '#05A8AA',
    fontStyle: 'italic',
  },

  cardScrollContainer: {
    paddingHorizontal: 8,
  },

  infoCardContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  infoCard: {
    width: 280,
    height: 176,
    backgroundColor: '#00000040',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 6,
  },

  infoCardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },

  infoCardContent: {
    padding: 8,
  },

  infoCardTitle: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  readMoreButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 36,
  },

  readMoreButtonText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 14,
  },

  readTime: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },

  perspectiveContainer: {
    marginTop: 32,
  },

  perspectiveHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  perspectiveScrollContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },

  perspectiveCard: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 300,
    backgroundColor: '#EFECCA40',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },

  perspectiveContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  perspectiveProfileImage: {
    // width: 50,
    // height: 50,
    borderRadius: 25,
  },

  profileName: {
    fontSize: 16,
    marginLeft: 8,
  },

  perspectiveText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    opacity: 0.7,
    marginTop: 16,
  },

  faqContainer: {
    padding: 16,
  },

  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  faqQuestionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00000010',
    borderRadius: 8,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },

  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  faqQuestion: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqAnswer: {
    marginTop: 10,
    fontSize: 14,
    color: '#303030',
  },
});