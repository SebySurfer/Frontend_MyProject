import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MatchScreen from './screens/bottom_tabs/match/MatchScreen.js';
import ProfileScreen from './screens/bottom_tabs/profile/ProfileScreen.js';


import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';



//const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <BottomTab.Navigator>
      
        <BottomTab.Screen name="Profile" component={ProfileScreen}/> 
        <BottomTab.Screen name="Match" component={MatchScreen}/> 
        

      </BottomTab.Navigator>



    </NavigationContainer>
    
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