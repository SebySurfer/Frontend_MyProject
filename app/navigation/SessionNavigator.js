import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 
import { useNavigation } from '@react-navigation/native';


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

<Drawer.Navigator
  screenOptions={{
    drawerIcon: ({ focused, color, size }) => (
      <View style={styles.iconContainer}>
        <Ionicons
          name="menu"
          size={size}
          color={focused ? '#8e40de' : '#183371'}
        />
      </View>
    ),
    drawerActiveTintColor: '#8e40de',
    drawerInactiveTintColor: '#183371',
    headerLeft: () => <CustomDrawerButton />, // Use the custom button


  }}
>

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

function CustomDrawerButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={() => navigation.toggleDrawer()}
    >
      <Ionicons name="menu" size={24} color="#183371" />
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: '#ffffff', // White background
    borderRadius: 12, // Rounded corners
    padding: 8, // Space around the icon
    marginLeft: 10, // Margin from the left edge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, // Shadow effect for Android
  },
  
});
