import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import NotificationsScreen from '../NotificationsScreen.js';

const StackNavigator = createStackNavigator();

const NotificationsStack = () => (
    <StackNavigator.Navigator
    screenOptions={{
      header: () => null
    }}>
      <StackNavigator.Screen name="Notifications Stack" component={NotificationsScreen} />
    </StackNavigator.Navigator>
  );
  
  export { NotificationsStack };