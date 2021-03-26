import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AllScreenTabNavigator } from "./TabNavigator.js";
import { StackScreenNavigation } from "./StackNavigator.js";
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../TakeATripScreen.js";
import RideListScreen from '../RideListScreen.js';
import RideInfoScreen from '../RideInfoScreen.js';
import RideRequestSuccessScreen from '../RideRequestSuccessScreen.js';
import PassengerForm from '../PassengerForm.js';
import DriverForm from '../DriverForm.js';

const AllAppNavigation = createStackNavigator();

const RootNavigator = () => (
    <NavigationContainer>
      <AllAppNavigation.Navigator
        initialRouteName="Back"
        screenOptions={{
          header: () => null
        }}
      >
        <AllAppNavigation.Screen name="Home" component={HomeScreen} 
          screenOptions = {{
            header: () => null
          }}
        />
        <AllAppNavigation.Screen name="Back" children={AllScreenTabNavigator} />
        <AllAppNavigation.Screen name="stack" children={StackScreenNavigation} />
        <AllAppNavigation.Screen name="Find a Ride" component={PassengerForm} />
      <AllAppNavigation.Screen name="Offer a Ride" component={DriverForm} />
      <AllAppNavigation.Screen name="Ride List" component={RideListScreen} />
      <AllAppNavigation.Screen name="Ride Details" component={RideInfoScreen} />
      <AllAppNavigation.Screen name="Ride Requested" component={RideRequestSuccessScreen} />
      </AllAppNavigation.Navigator>
    </NavigationContainer>
  );
  export default RootNavigator;