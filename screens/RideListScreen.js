/*
 * RideListScreen.js
 * Displays a working list of active or pending rides that fit the 
 * users search qualifications. 
 * 
 * Author: Grace Hunter, Gordon Olsen, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21
 * Last Edited: 21 March 21 by Brendan Keefer
 */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';
import Card from './styles/Card';

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

      <Avatar
        source = {require('../assets/WuberLogo.png')}
        size = {200}
      />
      
      <Text style = {stylesCommon.textTitle}
        >Rides you may be interested in:{"\n"}
      </Text>

        <FlatList 
          data = {trip}
          renderItem = {({ item }) => (

            <TouchableOpacity onPress = {() => {navigation.navigate('Ride Details', item)}}>
              <Card>
                  <Text style={stylesCommon.customBtnTextBlue}>{ item.name }</Text>
              </Card>
            </TouchableOpacity>

          )}
        />
    </View>
    )
}