import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'

import FilterScreen from '../screens/session/tabs/FilterScreen';
import MatchScreen from '../screens/session/tabs/MatchScreen';
import AccountScreen from '../screens/session/menu/AccountScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Filters') {
              iconName = focused ? 'filter' : 'filter-outline';
            } else if (route.name === 'Profiles') {
              iconName = focused ? 'people' : 'people-outline';
            }
  
            // Return the Ionicon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#bd8bf0', // Primary color
          tabBarInactiveTintColor: '#183371', // Text color
          headerShown: false,
        })}
        
          
          
        >
            <Tab.Screen name='Filters' component={FilterScreen} options={{ headerShown: false, headerBlurEffect: 'regular'}}/>
            <Tab.Screen name='Profiles' component={MatchScreen} options={{ headerShown: false }}/>

        </Tab.Navigator>

    )
}


export default function SessionNavigator() {
  return (
    <NavigationContainer>

         <Drawer.Navigator>
        <Drawer.Screen name='Home' component={TabNavigator} options={{ 
          headerTitle:'',
          headerBlurEffect: 'regular', 
          headerTransparent: true,}}/>

        <Drawer.Screen name='Account' component={AccountScreen} options={{ 
          headerBlurEffect: 'regular', 
          headerTransparent: true,
        
          }}/>
        </Drawer.Navigator>

    </NavigationContainer>
   
  )
}



