import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  return (
    <View style={styles.container}>
      <Input
        placeholder='Search' 
        label="Departing from"
        rightIcon={{ type: 'font-awesome', name: 'search' }}
      />
       <Input
        placeholder='Search' 
        label="Going to"
        rightIcon={{ type: 'font-awesome', name: 'search' }}
      />

    <RNDateTimePicker value={new Date()} mode="date" style={{ width: "100%" }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

