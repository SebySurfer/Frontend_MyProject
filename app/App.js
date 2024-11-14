import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SessionNavigator from './navigation/SessionNavigator.js';
import RegistrationNavigator from './navigation/RegistrationNavigator.js';
import ModalPicker from './components/ModalPicker.js';

import React, { useState } from 'react';



export default function App() {
    const [registered, setRegistered] = useState(false);
    const OPTIONS = ['Male', 'Female', "X", "Y", "T", "q", "3", "5", "8", "0", "ed", "2"]


    if(registered){
      return (
        <SessionNavigator/>
      );

    } else {
      return (
      
        <ModalPicker
        title="Choose Option:"
        options={OPTIONS}
        defaultValue="Select an Option"
    />
        
        
      );
      
    }

  
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