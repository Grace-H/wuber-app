/*
 * RideListScreen.js
 * Displays a working list of active or pending rides that fit the
 * users search qualifications.
 *
 * Author: Grace Hunter, Gordon Olsen, Emily Ray, & Brendan Keefer
 * Date Created: 05 March 21
 * Last Edited: 21 March 21 by Brendan Keefer
 */
import React, { useState, Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { Avatar } from "react-native-elements";
import stylesCommon from "./styles/stylesCommon";
import Card from "./styles/Card";
import axios from "axios";
import RegisteredTripCard from "../components/RegisteredTripCard.jsx";

class RideListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  getTrips() {
    const query = {
      origin: "Mac-Evans",
      destination: "Target",
      startTime: "2020-02-22T05:50:00.000Z",
      endTime: "2023-02-22T06:50:00.000Z",
    };

    axios({
      method: "get",
      url: "http://localhost:5000/trips/search",
      params: {
        origin: query.origin,
        destination: query.destination,
        startTime: query.startTime,
        endTime: query.endTime,
      },
    })
      .then((response) => {
        if (response.data.length > 0) {
          console.log("Trips Found...");
          this.setState({
            trips: response.data,
          });
        } else {
          console.log("No Trips found.");
          this.setState({
            trips: null,
          });
        }
      })
      .catch((err) => console.log("Didn't work: " + err));
    return this.state.trips;
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
      daysOftheWeek[time.getDay()] +
      ", " +
      monthsOftheYear[time.getMonth() + 1] +
      " " +
      time.getDate() +
      ", " +
      (time.getHours() - 12 <= 0 ? time.getHours() : time.getHours() - 12) +
      ":" +
      (time.getMinutes() < 10 ? "" + time.getMinutes() : "") +
      time.getMinutes() +
      " " +
      (time.getHours() - 12 <= 0 ? "AM" : "PM")
    );
  }

  /*

          <Avatar source={require("../assets/WuberLogo.png")} size={120} />

        <Text style={stylesCommon.textTitle}>
          Rides you may be interested in{"\n"}
        </Text>

        */
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.getTrips()}
          renderItem={({ item }) => (
            <TouchableOpacity key={item._id}>
              <RegisteredTripCard
                isDriver={false}
                date={this.formatTime(item.time)}
                destination={item.destination}
                departure={item.origin}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text>
              No trips found. Try expanding your time window or trying a
              different location or day.
            </Text>
          }
        />
      </SafeAreaView>
    );
  }
}

export default RideListScreen;
