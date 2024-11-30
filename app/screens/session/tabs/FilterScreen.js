import { StyleSheet, Text, View, ScrollView, ImageBackground, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHeaderHeight } from '@react-navigation/elements';
import ModalPicker from '../../../components/ModalPicker.js';
import CustomButton from '../../../components/CustomButton.js';
import { GlobalContext } from '../../../GlobalContext.js';

export default function FilterScreen() {
  const { userId } = useContext(GlobalContext); // userId from context
  const Questions = ["Too often", "I do", "In between", "Not too much", "Not at all"];
  const BooleanQ = ["Yes", "No"];

  let headerHeight = useHeaderHeight();

  const initialFilters = {
    drink: null,
    smoke: null,
    familyOriented: null,
    religious: null,
    wantKids: null,
    likeOutdoors: null,
  };

  const [filters, setFilters] = useState(initialFilters);

  const [hasChanged, setHasChanged] = useState(false);

  const updateFilter = (key, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [key]: value,
      };
      setHasChanged(JSON.stringify(updatedFilters) !== JSON.stringify(initialFilters)); 
      return updatedFilters;
    });
  };

  const handleUpdateFilters = async () => {
    try {
      const invalidFilters = Object.values(filters).some((value) => value === null || value === '');
      if (invalidFilters) {
        Alert.alert('Error', 'Please select all filter options before updating.');
        return;
      }

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

      console.log("Payload being sent:", formattedFilters); 

      const response = await axios.put(`http://localhost:8000/${userId}`, formattedFilters); 

      if (response.status === 200) {
        Alert.alert('Success', 'Your filters have been updated!', [
          { text: 'OK', onPress: () => console.log('Filters updated successfully') },
        ]);
        setHasChanged(false);
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      Alert.alert('Error', 'Failed to update filters, may be do to no changes being made.');
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
          style={[styles.CustomButton, !hasChanged && styles.DisabledButton]}
          disabled={!hasChanged} 
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
        </View>

        <View style={[styles.Boxes, { backgroundColor: "#a998d6" }]}>
          <Text style={styles.Title}>Ways of Thinking</Text>
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
  DisabledButton: {
    backgroundColor: 'gray', // Change the button's appearance when disabled
  },
});
