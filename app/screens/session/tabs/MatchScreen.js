import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Profile from '../../../components/Profile.js';
import { useHeaderHeight } from '@react-navigation/elements';
import axios from 'axios';
import { GlobalContext } from '../../../GlobalContext.js';

export default function MatchScreen() {
  const headerHeight = useHeaderHeight();
  const [profiles, setProfiles] = useState([]);
  const { userId } = useContext(GlobalContext);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/'); 
        const allProfiles = response.data;
        
        const userResponse = await axios.get(`http://127.0.0.1:8000/${userId}`);
        const currentUser = userResponse.data;

        const filteredProfiles = allProfiles
          .filter((user) => user.id !== userId)
          .slice(0, 10)
          .map((user) => ({
            id: user.id,
            Name: `${user.firstName} ${user.lastName}`,
            MatchRate: calculateMatchRate(currentUser.questions, user.questions),
            instagram: user.instagram, 
          }));

        setProfiles(filteredProfiles);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [userId]);

  const calculateMatchRate = (userQuestions, otherQuestions) => {
    if (!userQuestions || !otherQuestions || userQuestions.length === 0) return 0;
    const matches = userQuestions.reduce((count, question, index) => (
      count + (question === otherQuestions[index] ? 1 : 0)
    ), 0);
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
            instagram={profile.instagram} 
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
