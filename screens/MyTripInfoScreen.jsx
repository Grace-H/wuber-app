/*
 * MyTripInfoScreen.jsx
 * React Native component that displays a trip object's information 
 * to the user and allows them to approve or deny passengers.
 * Renders dynamically based on whether user is driver or not
 * 
 * Author: Grace Hunter
 * Date: 24 March 2021
 * last modified: 24 mar Grace
 */


import React, {Component} from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

 class MyTripInfoScreen extends Component {
     constructor(props){
         super(props);
         this.state = {
             userid: "606cd4960520b9ce1ac31c5b",
             driverName: "Driver not found.",
             passengers: []
         }
    }

    //get the name of a user from the database using the ObjectId of the user
    getDriverName = (userid) => {
        axios.get('http://localhost:5000/users/findbyid/' + userid)
            .then(res => this.setState({ driverName: res.data.name }))
            .catch(err => console.log("Error: " + err));

            return this.state.driverName;
    }

    //approve passenger p
    handleApprovePassenger = (p) => {
        console.log("Approve passenger pressed");
    }

    //deny passenger p
    handleDenyPassenger = (p) => {
        console.log("Deny passenger pressed");
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
          (time.getUTCHours() - 12 <= 0 ? time.getUTCHours() : time.getUTCHours() - 12) +
          ":" +
          (time.getUTCMinutes() < 10 ? "" + time.getUTCMinutes() : "") +
          time.getUTCMinutes() +
          " " +
          (time.getUTCHours() - 12 <= 0 ? "AM" : "PM")
        );
      }

     render() { 
        const trip = this.props.getSelectedTrip();
        return (
             <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.dateTitle}>{this.formatTime(trip.time)}</Text>
                    {trip.isRoundTrip && <Text style={{fontSize: 24, color: "#147EFB"}}>Return Time: {this.formatTime(trip.returnTime)}</Text>}
                    <View style={styles.destination}>
                        <View>
                            <Text style={styles.destination}>
                                From: {trip.origin}
                            </Text >
                            <Text style={styles.destination}>
                                To: {trip.destination}
                            </Text>
                        </View>
                        <Icon 
                            name='map-marker'
                            type='font-awesome'
                            style={styles.destination}
                            size="50x"
                        />
                    </View>
                    <Text style={{fontSize: 24, marginVertical: 8}}>Fee: $3.50</Text>  
                    <Text style={{fontSize: 24, marginVertical: 8}}>
                        Driver
                    </Text>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>{this.getDriverName(trip.driver)}</ListItem.Title>
                        </ListItem.Content>
                        {trip.driver != this.state.userid &&
                        //icon causing error: Warning: Failed prop type: Invalid prop `fontSize` of type `string` supplied to `Text`, expected `number`.

                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        }
                        
                    </ListItem>
                    <Text style={{fontSize: 24, marginVertical: 8}}>
                        Passengers
                    </Text>
                    {trip.passengers.map((p) => 
                        
                        <ListItem bottomDivider topDivider>
                            <Avatar source={require('../assets/blank-profile-picture.png')} />
                            <ListItem.Content>
                            <ListItem.Title>{p.name}</ListItem.Title>
                            </ListItem.Content>
                            {p.userid != this.state.userid && 
                            <Icon 
                            name='comment-o'
                            type='font-awesome'
                            color="grey"
                            />
                            /*<ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                            />
                            */}
                            {(trip.driver == this.state.userid && !p.approved) &&
                            <Icon 
                            name='check'
                            type='font-awesome'
                            color="green"
                            />}
                            {(trip.driver == this.state.userid && !p.approved) && 
                            <Icon 
                            name='times'
                            type='font-awesome'
                            color="red"
                            />
                            /*<TouchableHighlight onPress={this.handleDenyPassenger(p)}>
                            <ListItem.Chevron 
                                name='times'
                                type='font-awesome'
                                size='30x'
                                color="red"
                                
                            />
                            </TouchableHighlight>*/}

                        </ListItem>
                    )}
                </ScrollView>
             </SafeAreaView>
         );
     }
 }
  
 /*
                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        {trip.driver == this.state.userid && 
                            <ListItem.Chevron 
                                name='check'
                                type='font-awesome'
                                size='30x'
                                color="green"
                            />
                        }
                        {trip.driver == this.state.userid &&
                            <ListItem.Chevron 
                                name='times'
                                type='font-awesome'
                                size='30x'
                                color="red"
                            />
                        }
                        */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollView: {
        marginHorizontal: 10,
    },
    dateTitle: {
        fontWeight: "bold",
        fontSize: 48,
        color: "#EE8A22",
    },
    destination: {
        flexDirection:  "row",
        justifyContent: 'space-between',
        fontSize: 20,
        alignItems: "center",
        marginVertical: 8
    },
})
 export default MyTripInfoScreen;