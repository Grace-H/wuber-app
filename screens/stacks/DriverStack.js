import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import DriverForm from '../DriverForm.js';

const StackNavigator = createStackNavigator();

const DriverStack = () => (
    <StackNavigator.Navigator
    screenOptions={{
      header: () => null
    }}>
      <StackNavigator.Screen name="Driver Stack" component={DriverForm} />
    </StackNavigator.Navigator>
  );
  
  export { DriverStack };