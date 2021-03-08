/*
 * App.js
 * 
 * Author: Gordon Olson
 * Date: 05 March 2021 
 */

import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Input, Button, Header, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { render } from 'react-dom';

import DriverForm from './screens/DriverForm.js';
import PassengerForm from './screens/PassengerForm.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const Stack = createStackNavigator(); 

export default function App() {
  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Take a Trip" component = {HomeScreen} />
        <Stack.Screen name = "Find a Ride" component = {PassengerForm} />
        <Stack.Screen name = "Offer a Ride" component = {DriverForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  }
});

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
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