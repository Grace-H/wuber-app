/*
 * MyTripInfoScreen.jsx
 * React Native component that displays a trip object's information 
 * to the user and allows them to approve or deny passengers.
 * Renders dynamically based on whether user is driver or not
 * 
 * Author: Grace Hunter
 * Date: 24 March 2021
 * last modified: 29 April Grace
 */


import React, {Component} from 'react';
import { SafeAreaView, Text, ScrollView, StyleSheet, View, } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    handleApprovePassenger = (currtrip, p) => {
        console.log("Approve passenger pressed");
        currtrip.passengers.forEach(pass => {
            if(pass == p){
                pass.approved = true;
            }
        });
        const terms = {
            tripid: currtrip._id,
            trip: currtrip,
          };
      
        axios
            .post("http://localhost:5000/trips/addPassenger", terms)
            .then((res) => console.log(res.data))
            .catch((error) => console.log("Error: " + error));
    }

    //deny passenger p
    handleDenyPassenger = (currtrip, p) => {
        console.log("Deny passenger pressed");
        let index = -1;
        for(let i = 0; i < currtrip.passengers.length; i++){
            if(currtrip.passengers[i] == p){
                index = i;
            }
        }

        if(index != -1){
            currtrip.passengers.splice(index, 1);
        }

        const terms = {
            tripid: currtrip._id,
            trip: currtrip,
          };
      
        axios
            .post("http://localhost:5000/trips/addPassenger", terms)
            .then((res) => console.log(res.data))
            .catch((error) => console.log("Error: " + error));
    }

    //handle message user p
    handleMessageUser = (p) => {
        console.log("Message user pressed");
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
                                From: {trip.origin.substring(16, trip.origin.indexOf(','))}
                            </Text >
                            <Text style={styles.destination}>
                                To: {trip.destination.substring(16, trip.destination.indexOf(','))}
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
                            <Button
                                title=""
                                type="clear"
                                onPress={() => {handleMessageUser(p)}}
                                icon={
                                    <Icon 
                                        name='comment-o'
                                        size={30}
                                        color='grey'
                                    />}
                            />
                            
                            /*<ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                            />
                            */}
                            {(trip.driver == this.state.userid && !p.approved) &&
                            <Button
                                title=""
                                type="clear"
                                onPress={() => {this.handleApprovePassenger(trip, p)}}
                                icon={
                                    <Icon 
                                        name='check'
                                        size={30}
                                        color='green'
                                    />}
                            />}
                            {(trip.driver == this.state.userid) && 
                            <Button
                            title=""
                            type="clear"
                            onPress={() => {this.handleDenyPassenger(trip, p)}}
                            icon={
                                <Icon 
                                    name='times'
                                    size={30}
                                    color='red'
                                />}
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