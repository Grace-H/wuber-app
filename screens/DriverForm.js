/*
 * DriverForm.js
 * Form for driver to input details for a ride they would like to offer.
 * Author: Grace Hunter, Gordon Olson, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21
 * Last Edited: 8 apr by Grace
 */
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Input, Button, colors } from 'react-native-elements';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import stylesCommon from './styles/stylesCommon';
import axios from 'axios';
import { InteractionManager } from "react-native";

export default function DriverForm( {navigation}) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [seats, setSeats] = useState('');
  const [rtChecked, setrtChecked] = useState(false);
  const [opChecked, setopChecked] = useState(false);

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showReturnTime, setShowReturnTime] = useState(false);
  const [showPayment, setPayment] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(date);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  const onReturnTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || returnTime;
    setReturnTime(currentTime);
  };

  const showReturnTimeOption = () => {
    if(rtChecked){
      setShowReturnTime(false);
    }
    setrtChecked(!rtChecked);
  };

  const showReturnTimePicker = () => {
    setShowReturnTime(!showReturnTime);
  }

  const showDatePicker = () => {
    setShowDate(!showDate);
    setShowTime(false);
  };

  const showTimePicker = () => {
    setShowTime(!showTime);
    setShowDate(false);
  };

  const showPaymentOption = () => {
    if(opChecked) {
      setPayment(false);
    }
    setopChecked(!opChecked);
  }

  const showPaymentItems = () => {
    setPayment(!showPayment);
  }

  const onSubmit = () => {
    console.log("submitted");

    let day = date.getUTCDate();
    if(day.toString().length == 1){
      day = '0' + day;
    }

    let month = date.getUTCMonth();
    if(month.toString().length == 1){
      month = '0' + month;
    }

    let year = date.getUTCFullYear();

    let minutes = time.getUTCMinutes();
    if(minutes.toString().length == 1){
      minutes = '0' + minutes;
    }

    let hours = time.getUTCHours();
    if(hours.toString().length == 1){
      hours = '0' + hours;
    }

    let rtminutes = returnTime.getUTCMinutes();
    if(rtminutes.toString().length == 1){
      rtminutes = '0' + rtminutes;
    }

    let rthours = returnTime.getUTCHours();
    if(rthours.toString().length == 1){
      rthours = '0' + rthours;
    }

    const fullDate = new Date(year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':00');
    const fullrtDate = new Date(year + '-' + month + '-' + day + 'T' + rthours + ':' + rtminutes + ':00');


    const trip = {
      driver: "606cd4960520b9ce1ac31c5b", //change to be dynamic, set to Grace rn
      seats: seats,
      passengers: [],
      origin: origin,
      destination: destination,
      time: fullDate,
      isRoundTrip: rtChecked,
      returnTime: fullrtDate
    }

    axios.post('http://localhost:5000/trips/add', trip)
      .then(res => console.log(res.data));
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style = {stylesCommon.textTitleBlue}>
        Driver Information
      </Text>
      <Text>
        {"\n"}{"\n"}
      </Text>
      <Input
        placeholder='Search' 
        label="Departing from"
        rightIcon={{ type: 'font-awesome', name: 'search' }}
        onChangeText={value => setOrigin(value)}
      />
       <Input
        placeholder='Search' 
        label="Going to"
        rightIcon={{ type: 'font-awesome', name: 'search' }}
        onChangeText={value => setDestination(value)}
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
      <Input
        placeholder='1 - 10' 
        label="Passenger Seats"
        onChangeText={value => setSeats(value)}
      />
      <Button
        title={"Round Trip?" }
        type="clear"
        iconRight
        titleStyle={styles.label}
        icon={{ type: 'font-awesome', name: (rtChecked ? 'check-square-o' : 'square-o' )}}
        buttonStyle={{justifyContent: "space-between"}}
        onPress={showReturnTimeOption}
      />
      {rtChecked && <Button
          title={"\t\tReturn Time\t\t" + (returnTime.getHours() - 12 <= 0 ? returnTime.getHours() : returnTime.getHours() - 12) + ':' + returnTime.getMinutes() + " " + (returnTime.getHours() - 12 <= 0 ? "AM" : "PM")}
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: 'font-awesome', name: 'chevron-down' }}
          buttonStyle={{justifyContent: "space-between"}}
          onPress={showReturnTimePicker}
        />}
      {showReturnTime && <RNDateTimePicker value={returnTime} mode="time" style={{ width: "100%" }} onChange={onReturnTimeChange} />}
      
      <Button
      title={"Add Payment?"}
      type = "clear"
      iconRight
      titleStyle = {styles.label}
      icon={{ type: 'font-awesome', name: (opChecked ? 'check-square-o' : 'square-o')}}
      buttonStyle={{justifyContent: "space-between"}}
      onPress={showPaymentOption}
      />
      {opChecked && <Button
        title={"Venmo"}
        type = "clear"
        buttonStyle={{justifyContent: "space-between"}}
        onPress={showPaymentItems}
      /> }
      {opChecked && <Button
        title={"Cash"}
        type = "clear"
        buttonStyle={{justifyContent: "space-between"}}
        onPress={showPaymentItems}
      />
      }
      {showPayment && <Input
        placeholder= "How much $?"
      />}

      <Text>
        {"\n"}
      </Text>

      <TouchableOpacity 
        style = {stylesCommon.customBtnBG}
        onPress={onSubmit}>
        <Text style={stylesCommon.customBtnTextWhite}>
          Submit
        </Text>
      </TouchableOpacity>
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