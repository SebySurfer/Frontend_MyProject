import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

import MatchScreen from './MatchScreen.js'
import ProfileScreen from './ProfileScreen.js';


const CustomTabBar = (props) => {
    return (
      <View style={{ flexDirection: 'row', padding: 10 }}>
        {/* Render the standard tab bar items */}
        <BottomTabBar {...props} />
        
        {/* Add additional items similar to DrawerItems */}
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => alert('Custom Item')}>
          <Text>Custom Item</Text>
        </TouchableOpacity>
      </View>
    );
  };

  

const Tab = createBottomTabNavigator();

function CustomTabContent() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default CustomTabContent;

