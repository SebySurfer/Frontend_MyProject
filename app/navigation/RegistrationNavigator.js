import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/registration/SignUpScreen.js';
import FormScreen from '../screens/registration/FormScreen.js';
import SessionNavigator from './SessionNavigator.js';


const Stack = createStackNavigator();


export default function RegistrationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
        name='Sign Up' 
        component={SignUpScreen} 
        options={{ headerShown: false }}/>

        <Stack.Screen 
        name='Forms' 
        component={FormScreen} 
        options={{ 
          headerTitle:'',
          headerBlurEffect: 'regular', 
          headerTransparent: true,
          


          }}/>

        <Stack.Screen 
        name='Session' 
        component={SessionNavigator} 
        options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})