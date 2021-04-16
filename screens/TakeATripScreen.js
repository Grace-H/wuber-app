import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './Styles/stylesCommon';


export default function TakeATripScreen({navigation}) {
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

      <View style={{ flex: 1, alignItems: 'center'}}>

      <Text>
        {"\n"}
      </Text>

      <Avatar
        source = {require('../assets/WuberLogo.png')}
        size = {120}
      />
      <Text>
        {"\n"}{"\n"}{"\n"}{"\n"}
      </Text>
      <Text style={stylesCommon.textSub}> 
        What do you want to do today?
      </Text>
      <Text>
        {"\n"}
      </Text>

      <TouchableOpacity 
        style = {stylesCommon.customBtnSM}
        onPress = {() => {navigation.navigate('Passenger Stack')}}>
        <Text style={stylesCommon.customBtnTextWhiteSM}>
          Find a Ride
        </Text>
      </TouchableOpacity>
      <Text>
        {"\n"}
      </Text>
      <TouchableOpacity 
        style = {stylesCommon.customBtnSM}
        onPress = {() => {navigation.navigate('Driver Stack')}}>
        <Text style={stylesCommon.customBtnTextWhiteSM}>
          Offer a Ride
        </Text>
      </TouchableOpacity>
      </View>
    );
  }