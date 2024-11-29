import { StyleSheet, Text, View, ScrollView, ImageBackground, Alert } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useHeaderHeight } from '@react-navigation/elements';
import ModalPicker from '../../../components/ModalPicker.js';
import CustomButton from '../../../components/CustomButton.js';
import { GlobalContext } from '../../../GlobalContext.js';

export default function FilterScreen() {
  const { userId } = useContext(GlobalContext); // Get userId from context
  const Questions = ["Too often", "I do", "In between", "Not too much", "Not at all"];
  const BooleanQ = ["Yes", "No"];

  let headerHeight = useHeaderHeight();

  // State for filter selections
  const [filters, setFilters] = useState({
    drink: null,
    smoke: null,
    familyOriented: null,
    religious: null,
    wantKids: null,
    likeOutdoors: null,
  });

  // Handler to update the state for a specific filter
  const updateFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleUpdateFilters = async () => {
    try {
      // Check if any filter is null or not selected
      const invalidFilters = Object.values(filters).some((value) => value === null || value === '');
      if (invalidFilters) {
        Alert.alert('Error', 'Please select all filter options before updating.');
        return;
      }

      // Build the payload in the required format
      const formattedFilters = {
        questions: [
          filters.drink,
          filters.smoke,
          filters.familyOriented,
          filters.religious,
          filters.wantKids,
          filters.likeOutdoors,
        ],
      };

      console.log("Payload being sent:", formattedFilters); // Debug the payload

      // Make the PUT request
      const response = await axios.put(`http://localhost:8000/${userId}`, formattedFilters); // Replace localhost with your backend URL

      if (response.status === 200) {
        Alert.alert('Success', 'Your filters have been updated!', [
          { text: 'OK', onPress: () => console.log('Filters updated successfully') },
        ]);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      Alert.alert('Error', 'Failed to update filters. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../../../assets/backgrounds/1.jpeg')}
      style={styles.ImageStyle}
    >
      <ScrollView contentContainerStyle={[styles.Container, { paddingTop: headerHeight + 10 }]}>
        <CustomButton
          title="Update"
          onPress={handleUpdateFilters}
          style={styles.CustomButton}
        />

        <View style={[styles.Boxes, { backgroundColor: "#552bc2" }]}>
          <Text style={styles.Title}>Core Values</Text>
          <ModalPicker
    title="Drink"
    options={Questions}
    titleColor="white"
    defaultValue={filters.drink}
    onSelect={(value) => updateFilter('drink', value)}
/>
<ModalPicker
    title="Smoke"
    options={Questions}
    titleColor="white"
    defaultValue={filters.smoke}
    onSelect={(value) => updateFilter('smoke', value)}
/>
<ModalPicker
    title="Family-Oriented"
    options={Questions}
    titleColor="white"
    defaultValue={filters.familyOriented}
    onSelect={(value) => updateFilter('familyOriented', value)}
/>
<ModalPicker
    title="Religious"
    options={Questions}
    titleColor="white"
    defaultValue={filters.religious}
    onSelect={(value) => updateFilter('religious', value)}
/>
<ModalPicker
    title="Want kids"
    options={BooleanQ}
    titleColor="white"
    defaultValue={filters.wantKids}
    onSelect={(value) => updateFilter('wantKids', value)}
/>
<ModalPicker
    title="Like outdoors"
    options={BooleanQ}
    titleColor="white"
    defaultValue={filters.likeOutdoors}
    onSelect={(value) => updateFilter('likeOutdoors', value)}
/>

        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 35,
    justifyContent: 'space-evenly',
  },
  Boxes: {
    width: 300,
    height: 300,
    borderRadius: 18,
    borderCurve: 'continuous',
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  Title: {
    fontSize: 20,
    color: 'white',
  },
  ImageStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  CustomButton: {
    marginBottom: 20,
  },
});
