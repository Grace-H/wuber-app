/*
 * PassengerForm.js
 * Form for passenger to search for a trip.
 *
 * Author: Grace Hunter, Gordon Olsen, Emily Ray, & Brendan Keefer
 * Date Created: 06 March 21
 * Last Edited: 24 March 21 by Grace
 */

import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Input, Button, colors } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import stylesCommon from "./styles/stylesCommon";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";

export default function PassengerForm({ setQuery }) {
  const navigation = useNavigation();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [time1, setTime1] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime1, setShowTime1] = useState(false);
  const [showTime2, setShowTime2] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onTime1Change = (event, selectedTime) => {
    const currentTime = selectedTime || time1;
    setTime1(currentTime);
  };

  const onTime2Change = (event, selectedTime) => {
    const currentTime = selectedTime || time2;
    setTime2(currentTime);
  };

  const showDatePicker = () => {
    setShowDate(!showDate);
    setShowTime1(false);
    setShowTime2(false);
  };

  const showTimePicker1 = () => {
    setShowTime1(!showTime1);
    setShowDate(false);
    setShowTime2(false);
  };

  const showTimePicker2 = () => {
    setShowTime2(!showTime2);
    setShowDate(false);
    setShowTime1(false);
  };

  const onSubmit = () => {
    let day = date.getUTCDate();
    if (day.toString().length == 1) {
      day = "0" + day;
    }

    let month = date.getUTCMonth();
    if (month.toString().length == 1) {
      month = "0" + month;
    }

    let year = date.getUTCFullYear();

    let minutes1 = time1.getUTCMinutes();
    if (minutes1.toString().length == 1) {
      minutes1 = "0" + minutes1;
    }

    let hours1 = time1.getUTCHours();
    if (hours1.toString().length == 1) {
      hours1 = "0" + hours1;
    }

    let minutes2 = time2.getUTCMinutes();
    if (minutes2.toString().length == 1) {
      minutes2 = "0" + minutes2;
    }

    let hours2 = time2.getUTCHours();
    if (hours2.toString().length == 1) {
      hours2 = "0" + hours2;
    }

    const startDate =
      year + "-" + month + "-" + day + "T" + hours1 + ":" + minutes1 + ":00";
    const endDate =
      year + "-" + month + "-" + day + "T" + hours2 + ":" + minutes2 + ":00";
    /*
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
    */

    const query = {
      origin: origin,
      destination: destination,
      startDate: startDate,
      endDate: endDate,
    };

    setQuery(query);
    navigation.navigate("Ride List");

    //    const query = null;
    //    this.props.setQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={stylesCommon.textTitleBlue}>Passenger Information:</Text>
      <Text>
        {"\n"}
        {"\n"}
      </Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <GooglePlacesAutocomplete
          placeholder="Search"
          enablePoweredByContainer={false}
          minLength={3}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setOrigin(JSON.stringify(data));
          }}
          query={{
            key: "AIzaSyA8s_0uQeVxDRRgnmI5gWoRvdT8h1aXlUo",
            language: "en",
            rankby: "distance",
            components: "country:us",
          }}
          nearbyPlacesAPI={"GooglePlacesSearch"}
          textInputProps={{
            InputComp: Input,
            label: "Departing from",
            rightIcon: { type: "font-awesome", name: "search" },
            errorStyle: { color: "red" },
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          enablePoweredByContainer={false}
          minLength={3}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setDestination(JSON.stringify(data));
          }}
          query={{
            key: "AIzaSyA8s_0uQeVxDRRgnmI5gWoRvdT8h1aXlUo",
            language: "en",
            rankby: "distance",
            components: "country:us",
          }}
          debounce={200}
          nearbyPlacesAPI={"GooglePlacesSearch"}
          textInputProps={{
            InputComp: Input,
            label: "Going to",
            rightIcon: { type: "font-awesome", name: "search" },
            errorStyle: { color: "red" },
          }}
        />
        <Button
          title={
            "On\t\t" +
            (date.getMonth() + 1) +
            "/" +
            date.getDate() +
            "/" +
            date.getFullYear()
          }
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: "font-awesome", name: "chevron-down" }}
          buttonStyle={{ justifyContent: "space-between" }}
          onPress={showDatePicker}
        />
        {showDate && (
          <RNDateTimePicker
            value={date}
            mode="date"
            style={{ width: "100%" }}
            onChange={onDateChange}
          />
        )}
        <Button
          title={
            "Between\t\t" +
            (time1.getHours() - 12 <= 0
              ? time1.getHours()
              : time1.getHours() - 12) +
            ":" +
            (time1.getMinutes() < 10 ? "0" : "") +
            time1.getMinutes() +
            " " +
            (time1.getHours() - 12 <= 0 ? "AM" : "PM")
          }
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: "font-awesome", name: "chevron-down" }}
          buttonStyle={{ justifyContent: "space-between" }}
          onPress={showTimePicker1}
        />
        {showTime1 && (
          <RNDateTimePicker
            value={time1}
            mode="time"
            style={{ width: "100%" }}
            onChange={onTime1Change}
          />
        )}

        <Button
          title={
            "And\t\t" +
            (time2.getHours() - 12 <= 0
              ? time2.getHours()
              : time2.getHours() - 12) +
            ":" +
            (time2.getMinutes() < 10 ? "0" : "") +
            time2.getMinutes() +
            " " +
            (time2.getHours() - 12 <= 0 ? "AM" : "PM")
          }
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: "font-awesome", name: "chevron-down" }}
          buttonStyle={{ justifyContent: "space-between" }}
          onPress={showTimePicker2}
        />
        {showTime2 && (
          <RNDateTimePicker
            value={time2}
            mode="time"
            style={{ width: "100%" }}
            onChange={onTime2Change}
          />
        )}

        <Text>{"\n"}</Text>

        <TouchableOpacity style={stylesCommon.customBtnBG} onPress={onSubmit}>
          <Text style={stylesCommon.customBtnTextWhite}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  label: {
    color: colors.grey3,
    fontWeight: "bold",
    fontSize: 16,
  },
});
