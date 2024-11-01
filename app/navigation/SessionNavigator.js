import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FilterScreen from '../screens/session/tabs/FilterScreen';
import MatchScreen from '../screens/session/tabs/MatchScreen';
import AboutScreen from '../screens/session/menu/AboutScreen';
import AccountScreen from '../screens/session/menu/AccountScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Filters' component={FilterScreen}/>
            <Tab.Screen name='Marbles' component={MatchScreen}/>
        </Tab.Navigator>

    )
}


export default function SessionNavigator() {
  return (
    <NavigationContainer>

         <Drawer.Navigator>
        <Drawer.Screen name='Home' component={TabNavigator}/>
        <Drawer.Screen name='Account' component={AccountScreen}/>
        <Drawer.Screen name='About' component={AboutScreen}/>
        </Drawer.Navigator>

    </NavigationContainer>
   
  )
}



