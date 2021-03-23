/*
 * RegisteredTripCard Component
 * - for displaying trips that a user is registered for
 * 
 * Author: Grace Hunter
 * Date: 22 March 2021
 * Last Editted: 22 March Grace Hunter
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import stylesCommon from "../screens/styles/stylesCommon.js"

/*
 * RegisteredTripCard for a Trip a User is already registered for
 * props: 
 *  isDriver: {true} or {false}
 *  date: {String dateTime}
 *  departure: {String location}
 *  destination: {String location}
 * 
 * <RegisteredTripCard
 *   isDriver={true}
 *   date="Tuesday, March 2, 3:00pm"
 *   departure="Portland"
 *   destination="New York"
 */
class RegisteredTripCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View>
                    {getDriverLabel(this.props.isDriver)}
                    <View style={{padding: 6}}>
                        <Text style={styles.dateTitle}>{this.props.date}</Text>
                        <View style={styles.destination}>
                            <Icon 
                                    name='map-marker'
                                    type='font-awesome'
                                    style={styles.destination}
                                />
                            <View>
                                <Text style={styles.destination}>
                                    from: {this.props.departure}
                                </Text >
                                <Text style={styles.destination}>
                                    to: {this.props.destination}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rightArrow}>
                    <Icon
                        name='chevron-right'
                        type='font-awesome'
                    />
                </View>
            </View>
        );
    }
}

function getDriverLabel(isDriver){
    const color = isDriver ? '#EE8A22' : '#147EFB';
    const text = isDriver ? "DRIVING" : "RIDING";
    return (
        <View style = {{
            backgroundColor: color,
            color: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 3,
            borderTopLeftRadius: 6,
            borderBottomRightRadius: 6,
            width: 128,
        }}>
            <Text style = {{
                color: '#fff',
                fontSize: 16,
            }}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create( {
    card: {
        backgroundColor: '#fff',
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        margin: 4,
        flexDirection:  "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    dateTitle: {
        fontWeight: "bold",
        fontSize: 24,
    },
    destination: {
        flexDirection:  "row",
        fontSize: 16,
        alignItems: "center",
    },
    rightArrow: {
    },
});

export default RegisteredTripCard;