/*
 * App.js
 * 
 * The base code for the Wuber application.
 * 
 * Author: Gordon Olson, Grace Hunter, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21 
 * Last Edited: 23 March Gordon Olson
 */

//The different styles and features that are being used.
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, } from 'react-native';
import { Input, Button, Header, colors } from 'react-native-elements';
import { render } from 'react-dom';
import stylesCommon from './screens/styles/stylesCommon.js';

//The active screens for this application.
import DriverForm from './screens/DriverForm.js';
import PassengerForm from './screens/PassengerForm.js';
import RideListScreen from './screens/RideListScreen.js';
import RideInfoScreen from './screens/RideInfoScreen.js';
import RideRequestSuccessScreen from "./screens/RideRequestSuccessScreen.js";


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import RegisteredTripCard from './components/RegisteredTripCard';

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
      </Stack.Navigator>
    </NavigationContainer>
  );}

  /*
  * Serves as the Login Screen format for the app
  */
  function LoginScreen({navigation}) {
  
    return(
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Text style = {stylesCommon.appHeader}>
        Wuber
      </Text>
      
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
      onPress = {() => navigation.navigate('Home')}
      />
      </View> 
    )
  }
  /*
  * Serves as the Home Screen for the app
  */
  function HomeScreen({navigation}) {
  return (

    /* (Grace) Playground for testing screen with lists of rides user is signed up for
    until menu is connected

    <SafeAreaView>
      <RegisteredTripCard 
        isDriver={true}
        date={"Tuesday, March 3, 4:00pm"}
        departure={"College Ave Apartments"}
        destination={"O'Hare Int'l Airport"}
      />
      <RegisteredTripCard 
        isDriver={false}
        date={"Wednesday, March 16, 12:00pm"}
        departure={"Meyer Science Center"}
        destination={"Starbucks"}
      />
      <RegisteredTripCard 
        isDriver={true}
        date={"Saturday, March 31, 8:00am"}
        departure={"Wheaton College Bookstore"}
        destination={"Starbucks"}
      />
    </SafeAreaView>
    */
    
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