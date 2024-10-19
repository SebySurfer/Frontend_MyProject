import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import AboutScreen from './screens/settings/AboutScreen.js';
import AccountScreen from './screens/settings/AccountScreen.js';
import ProfileScreen from './screens/bottom_tabs/profile/ProfileScreen.js'
import MatchScreen from './screens/bottom_tabs/match/MatchScreen.js'



const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigator = () =>{
  return(
    <NavigationContainer>
    <BottomTab.Navigator>
      <BottomTab.Screen name="Profile" component={ProfileScreen}/> 
      <BottomTab.Screen name="Match" component={MatchScreen}/> 
    </BottomTab.Navigator>
  </NavigationContainer>

  )
}

const DrawerNavigator = () =>{
  return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Account" component={AccountScreen}/>
      <Drawer.Screen name="About" component={AboutScreen}/>
    </Drawer.Navigator>
    </NavigationContainer>

  )
}

//Test 
const StackNavigator = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen}/>
      <Stack.Screen name="About" component={AboutScreen}/>

    </Stack.Navigator>
    </NavigationContainer>


  )
}


export default function App() {
  return (
    
    <StackNavigator/>
    
  );
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