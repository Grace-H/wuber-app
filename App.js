/*
 * App.js
 * 
 * The base code for the Wuber application.
 * 
 * Author: Gordon Olson, Grace Hunter, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21 
 * Last Edited: 21 March 21 by Brendan Keefer
 */

//The different styles and features that are being used.
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Input, Button, Header, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { render } from 'react-dom';
import stylesCommon from './screens/styles/stylesCommon';


//The active screens for this application.
import DriverForm from './screens/DriverForm.js';
import PassengerForm from './screens/PassengerForm.js';
import RideListScreen from './screens/RideListScreen.js';
import RideInfoScreen from './screens/RideInfoScreen.js';
import RideRequestSuccessScreen from "./screens/RideRequestSuccessScreen.js";


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const Stack = createStackNavigator(); 

export default function App() {
  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Take a Trip" 
          component = {HomeScreen} 
        />
        <Stack.Screen 
          name = "Find a Ride" 
          component = {PassengerForm} 
        />
        <Stack.Screen 
          name = "Offer a Ride" 
          component = {DriverForm} 
        />
        <Stack.Screen
          name = "List of Rides"
          component = {RideListScreen}
        />
        <Stack.Screen
          name = "Ride Details"
          component = {RideInfoScreen}
        />
        <Stack.Screen
          name = "Ride Requested"
          component = {RideRequestSuccessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );}


function HomeScreen({navigation}) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
    <Text style = {stylesCommon.appHeader}>
    Wuber
    </Text>
      
    <Text style={{}}> What do you want to do today?</Text>
    <Button
    title = "Find a Ride" 
    onPress = {() => navigation.navigate('Find a Ride')}
    />
    <Button
    title = "Offer a Ride"
    onPress = {() => navigation.navigate('Offer a Ride')}
    />
    </View>
    
  );
}