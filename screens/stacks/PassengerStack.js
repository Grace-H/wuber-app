import React, {Component} from 'react';
import {Text} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import PassengerForm from '../PassengerForm.js';

const StackNavigator = createStackNavigator();

function PassengerStack ({ setPassSearchQuery }) {

  return(
    
      <StackNavigator.Navigator
        screenOptions={{
          header: () => null
        }}>
        <StackNavigator.Screen name="Passenger Stack" children={() => <PassengerForm setQuery={setPassSearchQuery} navigation={StackNavigator} />} />
      </StackNavigator.Navigator>
    ); 
}

export { PassengerStack };
