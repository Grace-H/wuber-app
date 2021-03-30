import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from '../ProfileScreen.js';

const StackNavigator = createStackNavigator();

const ProfileStack = () => (
    <StackNavigator.Navigator
    screenOptions={{
      header: () => null
    }}>
      <StackNavigator.Screen name="Profile Stack" component={ProfileScreen} />
    </StackNavigator.Navigator>
  );
  
  export { ProfileStack };