import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../TakeATripScreen.js';
import RideListScreen from '../RideListScreen.js';
import RideInfoScreen from '../RideInfoScreen.js';
import RideRequestSuccessScreen from '../RideRequestSuccessScreen.js';
import PassengerForm from '../PassengerForm.js';
import DriverForm from '../DriverForm.js';
import TakeATripScreen from '../HomeScreen.js';
import NotificationsScreen from '../NotificationsScreen.js';
import NotificationDisplay from '../NotificationDisplay.js';

const StackNavigator = createStackNavigator();

const StackScreenNavigation = () => (
    <StackNavigator.Navigator
    initialRouteName="stack"
      screenOptions={{
        title: null
      }}
    >
      <StackNavigator.Screen name="Home" component={HomeScreen} />
      <StackNavigator.Screen name="Take a Trip" component={TakeATripScreen} />
      <StackNavigator.Screen name="Find a Ride" component={PassengerForm} />
      <StackNavigator.Screen name="Offer a Ride" component={DriverForm} />
      <StackNavigator.Screen name="Ride List" component={RideListScreen} />
      <StackNavigator.Screen name="Ride Details" component={RideInfoScreen} />
      <StackNavigator.Screen name="Ride Requested" component={RideRequestSuccessScreen} />
      <StackNavigator.Screen name="Notifications" component={NotificationsScreen} />
      <StackNavigator.Screen name="NotificationDisplay" component={NotificationsScreen} />
    </StackNavigator.Navigator>
  );
  
  export { StackScreenNavigation };