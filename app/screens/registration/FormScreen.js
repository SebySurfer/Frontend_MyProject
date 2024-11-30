import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import { TextInput } from 'react-native-paper';
import { useHeaderHeight } from '@react-navigation/elements';
import ModalPicker from '../../components/ModalPicker.js';
import CustomButton from '../../components/CustomButton.js';

import { GlobalContext } from '../../GlobalContext.js';

export default function FormScreen({ navigation }) {
  let headerHeight = useHeaderHeight();

  const {setUserId} = useContext(GlobalContext);

  const Gender = ["Male", "Female"];
  const InterestedGender = ["Male", "Female"];

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [atGender, setAtGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instagram, setInstagram] = useState('');

  const handleSignUp = async () => {
    const newUser = {
      firstName,
      lastName,
      gender,
      atGender,
      phoneNumber,
      instagram,
      questions: [],
      is_Registered: false,
    };

    try {
      const response = await axios.post('http://localhost:8000/', newUser); 
      if (response.status === 200) {
        setUserId(response.data.id);
        console.log(response.data.id) // Verificando que al pasar el id funciona, y ver por el mongo
        Alert.alert('Success', 'You have been registered!', [
          { text: 'OK', onPress: () => navigation.navigate('Session') },
        ]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to register. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/White.jpeg')}
      style={styles.ImageStyle}
    >
      <View style={[styles.Container, { paddingTop: headerHeight + 50 }]}>
        <CustomTextInput title='First Name' value={firstName} onChangeText={setFirstName} />
        <CustomTextInput title='Last Name' value={lastName} onChangeText={setLastName} />

        <ModalPicker
          title="Gender:"
          options={Gender}
          defaultValue={gender}
          onSelect={(value) => setGender(value)}
        />

        <ModalPicker
          title="Attracted to:"
          options={InterestedGender}
          defaultValue={atGender}
          onSelect={(value) => setAtGender(value)}
        />

        <CustomTextInput title='Phone Number' value={phoneNumber} onChangeText={setPhoneNumber} />
        <CustomTextInput title='Instagram' value={instagram} onChangeText={setInstagram} />

        <CustomButton
          title='Sign Up'
          onPress={handleSignUp}
        />
      </View>
    </ImageBackground>
  );
}

const CustomTextInput = ({ title, value, onChangeText }) => (
  <TextInput
    label={title}
    value={value}
    onChangeText={onChangeText}
    style={styles.input}
  />
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 35,
  },
  input: {
    width: 300,
    maxWidth: '90%',
  },
  ImageStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
