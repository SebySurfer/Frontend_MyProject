import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FilterScreen from '../screens/session/tabs/FilterScreen';
import MatchScreen from '../screens/session/tabs/MatchScreen';
import AboutScreen from '../screens/session/menu/AboutScreen';
import LikeScreen from '../screens/session/tabs/LikeScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Filters' component={FilterScreen} options={{ headerShown: true, headerBlurEffect: 'regular',  }}/>
            <Tab.Screen name='Profiles' component={MatchScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Likes' component={LikeScreen} options={{ headerShown: false }}/>

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

        <Drawer.Screen name='About' component={AboutScreen} options={{ 
          headerBlurEffect: 'regular', 
          headerTransparent: true,
        
          }}/>
        </Drawer.Navigator>

    </NavigationContainer>
   
  )
}



