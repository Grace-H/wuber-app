/*
 * DriverForm.js
 * Form for driver to input details for a ride they would like to offer.
 * Author: Grace Hunter, Gordon Olson, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21
 * Last Edited: 29 apr by Grace
 */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Input, Button, colors } from "react-native-elements";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import stylesCommon from "./styles/stylesCommon";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//TODO if time permits, solve maps/scrollview warning

export default function DriverForm({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [seats, setSeats] = useState("");
  const [rtChecked, setrtChecked] = useState(false);
  const [opChecked, setopChecked] = useState(false);

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showReturnTime, setShowReturnTime] = useState(false);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
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
    if (rtChecked) {
      setShowReturnTime(false);
    }
    setrtChecked(!rtChecked);
  };

  const showReturnTimePicker = () => {
    setShowReturnTime(!showReturnTime);
  };

  const showDatePicker = () => {
    setShowDate(!showDate);
    setShowTime(false);
  };

  const showTimePicker = () => {
    setShowTime(!showTime);
    setShowDate(false);
  };

  const showPaymentOption = () => {
    if (opChecked) {
      setPayment(false);
    }
    setopChecked(!opChecked);
  };

  const showPaymentItems = () => {
    setPayment(!showPayment);
  };

  const onSubmit = () => {
    console.log("submitted");

    let day = date.getUTCDate();
    if (day.toString().length == 1) {
      day = "0" + day;
    }

    let month = date.getUTCMonth();
    if (month.toString().length == 1) {
      month = "0" + month;
    }

    let year = date.getUTCFullYear();

    let minutes = time.getUTCMinutes();
    if (minutes.toString().length == 1) {
      minutes = "0" + minutes;
    }

    let hours = time.getUTCHours();
    if (hours.toString().length == 1) {
      hours = "0" + hours;
    }

    let rtminutes = returnTime.getUTCMinutes();
    if (rtminutes.toString().length == 1) {
      rtminutes = "0" + rtminutes;
    }

    let rthours = returnTime.getUTCHours();
    if (rthours.toString().length == 1) {
      rthours = "0" + rthours;
    }

    const fullDate = new Date(
      year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":00"
    );
    const fullrtDate = new Date(
      year + "-" + month + "-" + day + "T" + rthours + ":" + rtminutes + ":00"
    );

    const trip = {
      driver: "606cd4b30520b9ce1ac31c5c", //change to be dynamic, set to Grace rn
      seats: seats,
      passengers: [],
      origin: origin,
      destination: destination,
      time: fullDate,
      isRoundTrip: rtChecked,
      returnTime: fullrtDate,
      payment: text,
      dollars: text2,
    };

    axios
      .post("http://localhost:5000/trips/add", trip)
      .then((res) => console.log(res.data))
      .catch((error) => console.log("Error: " + error));

    navigation.navigate("Offer Success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={stylesCommon.textTitleBlue}>Driver Information</Text>
      <Text>
        {"\n"}
        {"\n"}
      </Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <GooglePlacesAutocomplete
          placeholder="Search"
          placeholder="Search"
          enablePoweredByContainer={false}
          minLength={2}
          autoFocus={false}
          returnKeyType={"search"}
          listViewDisplayed="auto"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setOrigin(JSON.stringify(data));
          }}
          query={{
            key: "AIzaSyA8s_0uQeVxDRRgnmI5gWoRvdT8h1aXlUo",
            language: "en",
            components: "country:us",
          }}
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
          minLength={2}
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setDestination(JSON.stringify(data));
          }}
          query={{
            key: "AIzaSyA8s_0uQeVxDRRgnmI5gWoRvdT8h1aXlUo",
            language: "en",
            componnts: "country:us",
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
            "At\t\t" +
            (time.getHours() - 12 <= 0
              ? time.getHours()
              : time.getHours() - 12) +
            ":" +
            (time.getMinutes() < 10 ? "0" : "") +
            time.getMinutes() +
            " " +
            (time.getHours() - 12 <= 0 ? "AM" : "PM")
          }
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{ type: "font-awesome", name: "chevron-down" }}
          buttonStyle={{ justifyContent: "space-between" }}
          onPress={showTimePicker}
        />
        {showTime && (
          <RNDateTimePicker
            value={time}
            mode="time"
            style={{ width: "100%" }}
            onChange={onTimeChange}
          />
        )}
        <Input
          placeholder="1 - 10"
          label="Passenger Seats"
          onChangeText={(value) => setSeats(value)}
        />
        <Button
          title={"Round Trip?"}
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{
            type: "font-awesome",
            name: rtChecked ? "check-square-o" : "square-o",
          }}
          buttonStyle={{ justifyContent: "space-between" }}
          onPress={showReturnTimeOption}
        />
        {rtChecked && (
          <Button
            title={
              "\t\tReturn Time\t\t" +
              (returnTime.getHours() - 12 <= 0
                ? returnTime.getHours()
                : returnTime.getHours() - 12) +
              ":" +
              returnTime.getMinutes() +
              " " +
              (returnTime.getHours() - 12 <= 0 ? "AM" : "PM")
            }
            type="clear"
            iconRight
            titleStyle={styles.label}
            icon={{ type: "font-awesome", name: "chevron-down" }}
            buttonStyle={{ justifyContent: "space-between" }}
            onPress={showReturnTimePicker}
          />
        )}
        {showReturnTime && (
          <RNDateTimePicker
            value={returnTime}
            mode="time"
            style={{ width: "100%" }}
            onChange={onReturnTimeChange}
          />
        )}

        <Button
          title={"Add Payment?"}
          type="clear"
          iconRight
          titleStyle={styles.label}
          icon={{
            type: "font-awesome",
            name: opChecked ? "check-square-o" : "square-o",
          }}
          buttonStyle={{ justifyContent: "space-between" }}
          onPress={showPaymentOption}
        />
        {opChecked && (
          <TextInput
            style={{ height: 40 }}
            placeholder="Cash or Venmo?"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        )}
        {opChecked && (
          <TextInput
            style={{ height: 40 }}
            placeholder="How much $?"
            onChangeText={(text2) => setText2(text2)}
            defaultValue={text2}
          />
        )}

        <Text>{"\n"}</Text>

        <TouchableOpacity
          style={stylesCommon.customBtnBG}
          onPress={() => {
            onSubmit();
          }}
        >
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
