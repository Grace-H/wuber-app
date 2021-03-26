/*
 * App.js
 * 
 * The base code for the Wuber application.
 * 
 * Author: Gordon Olson, Grace Hunter, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21 
 * Last Edited: 24 March Brendan
 */

//The different styles and features that are being used.
import React, {useState} from 'react';
import { TextInput, StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { Input, Button, Header, colors } from 'react-native-elements';
import { render } from 'react-dom';
import stylesCommon from './screens/styles/stylesCommon';

//The active screens for this application.
import DriverForm from './screens/DriverForm.js';
import PassengerForm from './screens/PassengerForm.js';
import RideListScreen from './screens/RideListScreen.js';
import RideInfoScreen from './screens/RideInfoScreen.js';
import RideRequestSuccessScreen from "./screens/RideRequestSuccessScreen.js";
import MyTripsScreen from './screens/MyTripsScreen';
import MyTripInfoScreen from './screens/MyTripInfoScreen';
import NotificationMenu from './screens/NotificationMenu';
import ProfileScreen from './screens/ProfileScreen';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';


const Stack = createStackNavigator(); 

export default function App() {
  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Login"
          component = {LoginScreen}
        />
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
        <Stack.Screen
          name = "My Trips Screen"
          component = {MyTripsScreen}
        />
        <Stack.Screen
          name = "Trip Info Screen"
          component = {MyTripInfoScreen}
        />
        <Stack.Screen
          name = "Profile"
          component = {ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );}

  /*
  * Serves as the Login Screen format for the app
  */
  function LoginScreen({navigation}) {
  
    return(
     <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Text style = {stylesCommon.appHeader}>
        Wuber
      </Text>

      <Image
        source = {require('./assets/WuberLogo.png')}
        style = {{width: 350, height: 350}}
      />
      
      <Text> Username: </Text>
      <TextInput 
          style = {{ height: 30, borderColor: 'black', borderWidth: 5}}
          placeholder = "                "
      />
      <Text> Password: </Text>
      <TextInput 
          style = {{ height: 30, borderColor: 'black', borderWidth: 5}}
          placeholder = "                "
      />
      <Button
      title = "Submit" 
      onPress = {() => navigation.navigate('Take a Trip')}
      />
      </SafeAreaView> 
    )
  }
  
  /*
  * Serves as the Home Screen for the app
  */
  function HomeScreen({navigation}) {
  return (
    
    
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: 'space-evenly' }}>
    <Text style = {stylesCommon.appHeader}>
    Wuber
    </Text>

    <Image
        source = {require('./assets/WuberLogo.png')}
        style = {{width: 350, height: 350}}

      />
    
      
    <Text style={{}}> What do you want to do today?</Text>
    <Button
    title = "Find a Ride" 
    onPress = {() => navigation.navigate('Find a Ride')}
    />
    <Button
    title = "Offer a Ride"
    onPress = {() => navigation.navigate('Offer a Ride')}
    />
    </SafeAreaView>
  );

  

}