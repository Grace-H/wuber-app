import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../LoginScreen.js';

const StackNavigator = createStackNavigator();

const LoginStack = () => (
    <StackNavigator.Navigator
    screenOptions={{
      header: () => null
    }}>
      <StackNavigator.Screen name="Login Stack" component={LoginScreen} />
    </StackNavigator.Navigator>
  );
  
  export { LoginStack };