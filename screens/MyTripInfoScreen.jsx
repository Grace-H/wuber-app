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
import { SafeAreaView, Text, ScrollView, StyleSheet, View } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import stylesCommon from './styles/stylesCommon';

 class MyTripInfoScreen extends Component {
     render() { 
         return (
             <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.dateTitle}>{this.props.trip.date}</Text>
                    <Text style={{fontSize: 24, color: "#147EFB"}}>Return Time: 9:00am</Text>
                    <View style={styles.destination}>
                        <View>
                            <Text style={styles.destination}>
                                From: {this.props.trip.departure}
                            </Text >
                            <Text style={styles.destination}>
                                To: {this.props.trip.destination}
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
                        Driver:
                    </Text>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>Pheobe Miller</ListItem.Title>
                        </ListItem.Content>
                        {this.props.isDriver == false &&
                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        }
                        
                    </ListItem>
                    <Text style={{fontSize: 24, marginVertical: 8}}>
                        Passengers:
                    </Text>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>Rebecca Johnson</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        {this.props.trip.isDriver && 
                            <ListItem.Chevron 
                                name='check'
                                type='font-awesome'
                                size='30x'
                                color="green"
                            />
                        }
                        {this.props.trip.isDriver &&
                            <ListItem.Chevron 
                                name='times'
                                type='font-awesome'
                                size='30x'
                                color="red"
                            />
                        }
                    
                    </ListItem>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>Samuel Smith</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        {this.props.trip.isDriver && 
                            <ListItem.Chevron 
                                name='check'
                                type='font-awesome'
                                size='30x'
                                color="green"
                            />
                        }
                        {this.props.trip.isDriver &&
                            <ListItem.Chevron 
                                name='times'
                                type='font-awesome'
                                size='30x'
                                color="red"
                            />
                        }
                    
                    </ListItem>
                    <ListItem bottomDivider topDivider>
                        <Avatar source={require('../assets/blank-profile-picture.png')} />
                        <ListItem.Content>
                        <ListItem.Title>John Huntington</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron 
                            name='comment-o'
                            type='font-awesome'
                            size='25x'
                            color="grey"
                        />
                        {this.props.trip.isDriver && 
                            <ListItem.Chevron 
                                name='check'
                                type='font-awesome'
                                size='30x'
                                color="green"
                            />
                        }
                        {this.props.trip.isDriver &&
                            <ListItem.Chevron 
                                name='times'
                                type='font-awesome'
                                size='30x'
                                color="red"
                            />
                        }
                    
                    </ListItem>
                </ScrollView>
             </SafeAreaView>
         );
     }
 }
  
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