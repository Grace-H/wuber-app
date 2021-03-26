/*
 * NotificationMenu.js
 * 
 * The screen that will display nofications for the user. 
 * 
 * Author: Gordon Olson, Grace Hunter, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21 
 * Last Edited: 24 March Brendan
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import stylesCommon from './styles/stylesCommon';

export default function Notifications ({ navigation }) {

    //Dummy message.
    const [message,  setMessage] = useState([
        { name: 'Brendan Keefer @ 9:00am on 03/26/21', key: '1' },
      ]);


    <View style = {stylesCommon.container}>
        <Text style = {stylesCommon.appHeader}>
        Wuber
      </Text>

    <FlatList 
          data = {message}
          renderItem = {({ item }) => (

            <TouchableOpacity onPress = {() => {navigation.navigate('Trip Info Screen', item)}}>
              <Card>
                  <Text style={stylesCommon.customBtnTextBlue}>{ item.name }</Text>
              </Card>
            </TouchableOpacity>

          )}
        />


    </View>
}