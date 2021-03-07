import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Input, Button, Header, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { render } from 'react-dom';
<<<<<<< HEAD
import DriverForm from './screens/DriverForm.js';
import PassengerForm from './screens/PassengerForm.js';

export default function App() {
    return(<PassengerForm />);
}
=======
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const Stack = createStackNavigator(); 

export default function App() {
  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "" component = {LoginScreen} />
        <Stack.Screen name = "Home" component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );}
>>>>>>> e536d52a800f557921958278fa80d506ca759781

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  }
});

