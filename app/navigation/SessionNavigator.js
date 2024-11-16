import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FilterScreen from '../screens/session/tabs/FilterScreen';
import MatchScreen from '../screens/session/tabs/MatchScreen';
import AccountScreen from '../screens/session/menu/AccountScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Filters' component={FilterScreen} options={{ headerShown: false, headerBlurEffect: 'regular',  }}/>
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



