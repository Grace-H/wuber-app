import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Input, Button, Header, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { render } from 'react-dom';
import DriverForm from './screens/DriverForm.js';
import PassengerForm from './screens/PassengerForm.js';

export default function App() {
    return(<PassengerForm />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  }
});

