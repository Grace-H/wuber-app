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

export default class RideInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: null,
    };
  }

  getTrip() {
    this.setState({
      trip: this.props.getSelectedTrip(),
    });
  }

  render() {
    this.getTrip();
    const trip = this.state.trip;

    return (
      <View style={stylesCommon.container}>
        <Text style={stylesCommon.textTitleBlue}>More Information</Text>

        <ScrollView style={stylesCommon.scrollView}>
          <Text style={stylesCommon.textTitle}>Destination</Text>

          <Text style={stylesCommon.textBod}>{trip.destination}</Text>

          <Text style={stylesCommon.textTitle}>Date</Text>

          <Text style={stylesCommon.textBod}>{trip.date}</Text>

          <Text style={stylesCommon.textTitle}>Round Trip</Text>

          <Text style={stylesCommon.textBod}>
            {trip.isRoundTrip ? "Yes" : "No"}
          </Text>

          {trip.isRoundTrip && (
            <Text style={stylesCommon.textTitle}>Return Time</Text>
          )}

          {trip.isRoundTrip && (
            <Text style={stylesCommon.textBod}>{trip.returnTime}</Text>
          )}
        </ScrollView>

        <TouchableOpacity
          style={stylesCommon.customBtnBG}
          onPress={() => {
            navigation.navigate("Ride Requested");
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
