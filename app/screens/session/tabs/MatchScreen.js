import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Profile from '../../../components/Profile.js';
import { useHeaderHeight } from '@react-navigation/elements';
import axios from 'axios';
import { GlobalContext } from '../../../GlobalContext.js';

export default function MatchScreen() {
  const headerHeight = useHeaderHeight();
  const [profiles, setProfiles] = useState([]);
  const { userId } = useContext(GlobalContext); // userId from context
  const [userQuestions, setUserQuestions] = useState([]); // Questions of the logged-in user

  // Fetch profiles from backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        // Fetch all profiles
        const response = await axios.get('http://127.0.0.1:8000/'); // Replace with your backend URL
        const allProfiles = response.data; // Assuming response.data is an array of users
        console.log(allProfiles)
        // Fetch current user's details to get their questions
        const userResponse = await axios.get(`http://127.0.0.1:8000/${userId}`);
        const currentUser = userResponse.data;
        setUserQuestions(currentUser.questions || []);

        // Limit to first 10 users and map required fields
        const filteredProfiles = allProfiles.filter((user) => user.id !== userId).slice(0, 10).map((user) => ({
          Name: `${user.firstName} ${user.lastName}`,
          MatchRate: calculateMatchRate(currentUser.questions, user.questions), // Compare questions
        }));


        setProfiles(filteredProfiles);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [userId]);

  // Function to calculate match rate
  const calculateMatchRate = (userQuestions, otherQuestions) => {
    if (!userQuestions || !otherQuestions || userQuestions.length === 0) {
      return 0;
    }

    // Compare each question at the same index
    const matches = userQuestions.reduce((count, question, index) => {
      return count + (question === otherQuestions[index] ? 1 : 0);
    }, 0);

    // Calculate percentage match
    return Math.round((matches / userQuestions.length) * 100);
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
