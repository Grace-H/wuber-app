/*
 * RideInfoScreen.js
 * Displays the information for an individual trip once it is selected.
 *
 * Author: Grace Hunter, Gordon Olsen, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21
 * Last Edited: 21 March 21 by Brendan Keefer
 */
import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import stylesCommon from "./styles/stylesCommon";
import axios from "axios";

export default class RideInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: null,
      userid: "606cd5580520b9ce1ac31c5d", //make dynamic
    };
  }

  getTrip() {
    return this.props.getSelectedTrip();
  }

  formatTime(t) {
    const daysOftheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOftheYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const time = new Date(t);

    return (
      daysOftheWeek[time.getUTCDay()] +
      ", " +
      monthsOftheYear[time.getUTCMonth() + 1] +
      " " +
      time.getUTCDate() +
      ", " +
      (time.getUTCHours() - 12 <= 0
        ? time.getUTCHours()
        : time.getUTCHours() - 12) +
      ":" +
      (time.getUTCMinutes() < 10 ? "" + time.getUTCMinutes() : "") +
      time.getUTCMinutes() +
      " " +
      (time.getUTCHours() - 12 <= 0 ? "AM" : "PM")
    );
  }

  handleJoinTrip = () => {
    const ntrip = this.props.getSelectedTrip();
    ntrip.passengers.push({ _id: this.state.userid });
    const pass = this.state.userid;
    const terms = {
      tripid: ntrip._id,
      trip: ntrip,
    };

    axios
      .post("http://localhost:5000/trips/addPassenger", terms)
      .then((res) => console.log(res.data))
      .catch((error) => console.log("Error3: " + error));
    this.props.navigation.navigate("Ride Requested");
  };

  render() {
    const trip = this.getTrip();

    return (
      <View style={stylesCommon.container}>
        <Text style={stylesCommon.textTitleBlue}>More Information</Text>

        <ScrollView style={stylesCommon.scrollView}>
          <Text style={stylesCommon.textTitle}>Origin</Text>

          <Text style={stylesCommon.textBod}>{trip.origin}</Text>

          <Text style={stylesCommon.textTitle}>Destination</Text>

          <Text style={stylesCommon.textBod}>{trip.destination}</Text>

          <Text style={stylesCommon.textTitle}>Date</Text>

          <Text style={stylesCommon.textBod}>{this.formatTime(trip.time)}</Text>

          <Text style={stylesCommon.textTitle}>Round Trip</Text>

          <Text style={stylesCommon.textBod}>
            {trip.isRoundTrip ? "Yes" : "No"}
          </Text>

          {trip.isRoundTrip && (
            <Text style={stylesCommon.textTitle}>Return Time</Text>
          )}

          {trip.isRoundTrip && (
            <Text style={stylesCommon.textBod}>
              {trip.formatTime(trip.returnTime)}
            </Text>
          )}
        </ScrollView>

        <TouchableOpacity
          style={stylesCommon.customBtnBG}
          onPress={() => {
            this.handleJoinTrip();
          }}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Join Ride</Text>
        </TouchableOpacity>

        <Text>{"\n"}</Text>

        <TouchableOpacity
          style={stylesCommon.customBtnBG}
          onPress={() => {
            navigation.navigate("List of Rides");
          }}
        >
          <Text style={stylesCommon.customBtnTextWhite}>Back</Text>
        </TouchableOpacity>

        <Text>{"\n"}</Text>
      </View>
    );
  }
}
