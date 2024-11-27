import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SessionNavigator from './navigation/SessionNavigator.js';
import RegistrationNavigator from './navigation/RegistrationNavigator.js';
import ModalPicker from './components/ModalPicker.js';

import React, { useState, useContext } from 'react';



/*
<ModalPicker
        title="Choose Option:"
        options={OPTIONS}
        defaultValue="Select an Option"
    />

*/


export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return isRegistered ? <SessionNavigator /> : <RegistrationNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * cd app
 * npm run ios
 */