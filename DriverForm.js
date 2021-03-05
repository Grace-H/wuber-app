import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-nativ-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Input
        placeholder='Destination' 
      />
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
