import React, { useEffect, useState, useContext} from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Profile from '../../../components/Profile.js';
import { useHeaderHeight } from '@react-navigation/elements';
import axios from 'axios';
import { GlobalContext } from '../../../GlobalContext.js';

export default function MatchScreen() {
  const headerHeight = useHeaderHeight();
  const [profiles, setProfiles] = useState([]);
  const { userId } = useContext(GlobalContext); // userId from context
  console.log(userId);
  // Fetch profiles from backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/'); // Replace with your backend URL
        const allProfiles = response.data; // Assuming response.data is an array of users

        // Limit to first 10 users and map required fields
        const first10Profiles = allProfiles.slice(0, 10).map((user) => ({
          Name: `${user.firstName} ${user.lastName}`,
          MatchRate: calculateMatchRate(user.questions), // Logic for match rate
        }));

        setProfiles(first10Profiles);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  // Function to calculate match rate
  const calculateMatchRate = (questions) => {
    // Example logic: match rate is the number of answered questions
    return (questions.length / 10) * 100; // Assuming 10 is the total number of possible questions
  };

  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/3.jpeg')}
      style={styles.ImageStyle}
    >
      <ScrollView
        contentContainerStyle={[styles.Container, { paddingTop: headerHeight + 10 }]}
        showsVerticalScrollIndicator={false}
      >
        {profiles.map((profile, index) => (
          <Profile
            key={index}
            Name={profile.Name}
            MatchRate={profile.MatchRate}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Container: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 35,
    justifyContent: 'space-evenly',
  },
});
