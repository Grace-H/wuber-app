// RideListScreen.js
import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import stylesCommon from './Styles/stylesCommon';
import Card from './Styles/Card';

export default function RideListScreen({ navigation }) {

    //Dummy data.
    const [trip,  setTrip] = useState([
      { name: 'Dave is going to Starbucks at 2:15pm on 03/06/21', key: '1' },
      { name: 'Alice is going to Starbucks at 11:00am on 03/07/21', key: '2' },
      { name: 'Nathan is going to Starbucks at 7:00pm on 03/11/21', key: '3' },
      { name: 'Jonathan is going to Starbucks at 9:00am on 03/11/21', key: '4' },
      { name: 'Emily is going to Starbucks at 9:00am on 03/11/21', key: '5' },
      { name: 'Gordon is going to Starbucks at 9:00am on 03/11/21', key: '6' },
      { name: 'Brendan is going to Starbucks at 9:00am on 03/11/21', key: '7' },
      { name: 'Grace is going to Starbucks at 9:00am on 03/11/21', key: '8' }
    ]);

    return (
    <View style = {stylesCommon.container}>

      <Text style = {stylesCommon.appHeader}>
      Wuber
      </Text>
      
      <Text style = {stylesCommon.textTitle}
        >Rides you may be interested in:{"\n"}
      </Text>

        <FlatList 
          data = {trip}
          renderItem = {({ item }) => (

            <TouchableOpacity onPress = {() => {navigation.navigate('Info', item)}}>
              <Card>
                  <Text style={stylesCommon.customBtnTextBlue}>{ item.name }</Text>
              </Card>
            </TouchableOpacity>

          )}
        />
    </View>
    )
}