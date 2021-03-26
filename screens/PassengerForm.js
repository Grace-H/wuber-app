/*
 * PassengerForm.js
 * Form for passenger to search for a trip.
 * 
 * Author: Grace Hunter, Gordon Olsen, Emily Ray, & Brendan Keefer
 * Date Created: 06 March 21
 * Last Edited: 24 March 21 by Grace
 */

import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, } from 'react-native';
import { Input, Button, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import stylesCommon from './styles/stylesCommon';

export default function PassengerForm( {navigation} ) {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  const showDatePicker = () => {
    setShowDate(!showDate);
    setShowTime(false);
  };

  const showTimePicker = () => {
    setShowTime(!showTime);
    setShowDate(false);
  };
  
  return (
        <SafeAreaView style={styles.container}>

        <Text style = {stylesCommon.appHeader}>
          Wuber
        </Text>
        <ScrollView>
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
        <Button
            title={"On\t\t" + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() }
            type="clear"
            iconRight
            titleStyle={styles.label}
            icon={{ type: 'font-awesome', name: 'chevron-down' }}
            buttonStyle={{justifyContent: "space-between"}}
            onPress={showDatePicker}
        />
        {showDate && <RNDateTimePicker value={date} mode="date" style={{ width: "100%" }} onChange={onDateChange} />}
        <Button
            title={"At\t\t" + (time.getHours() - 12 <= 0 ? time.getHours() : time.getHours() - 12) + ':' + time.getMinutes() + " " + (time.getHours() - 12 <= 0 ? "AM" : "PM")}
            type="clear"
            iconRight
            titleStyle={styles.label}
            icon={{ type: 'font-awesome', name: 'chevron-down' }}
            buttonStyle={{justifyContent: "space-between"}}
            onPress={showTimePicker}
        />
        {showTime && <RNDateTimePicker value={time} mode="time" style={{ width: "100%" }} onChange={onTimeChange} />}
        <Button
        onPress = {() => {navigation.navigate('Ride List')}}
        title={"Submit" }
        iconRight
        />
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  label: {
    color: colors.grey3, 
    fontWeight: "bold",
    fontSize: 16,
  }
});

