import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import PassengerForm from '../PassengerForm.js';

const StackNavigator = createStackNavigator();

const PassengerStack = () => (
    <StackNavigator.Navigator
    screenOptions={{
      header: () => null
    }}>
      <StackNavigator.Screen name="Passenger Stack" component={PassengerForm} />
    </StackNavigator.Navigator>
  );
  
  export { PassengerStack };