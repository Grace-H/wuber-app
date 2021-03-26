/*
 * NotificationMenu.js
 * 
 * The screen that will display nofications for the user. 
 * 
 * Author: Gordon Olson, Grace Hunter, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21 
 * Last Edited: 24 March Brendan
 */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';

export default function Notifications ({ navigation }) {
      //Dummy message.
  const [message,  setMessage] = useState([
    { name: 'Brendan Keefer @ 9:00am on 03/26/21', key: '1' },
  ]);
  return(

    <View style = {stylesCommon.container}>

      <Text style = {stylesCommon.appHeader}>
        Notifications
      </Text>

      <FlatList 
            data = {message}
            renderItem = {({ item }) => (

              <TouchableOpacity onPress = {() => {navigation.navigate('NotificationDisplay', item)}}>
                <Card>
                    <Text style={stylesCommon.customBtnTextBlue}>{ item.name }</Text>
                </Card>
              </TouchableOpacity>

            )}
          />

    </View>
  );
}