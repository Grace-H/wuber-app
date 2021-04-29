/*
 * RegisteredTripCard Component
 * - for displaying trips that a user is registered for
 * 
 * Author: Grace Hunter
 * Date: 22 March 2021
 * Last Editted: 24 March Grace Hunter
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

class MessageCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.userInfo}>
                        <View style={styles.iconContainer}>
                        <Ionicons name={"person-circle"} size={60} color={"#147EFB"}/>
                        </View>
                        <View style={styles.textSection}>
                            <View style={styles.userInfoText}>
                                <Text style={styles.userName}>{
                                    this.props.userName}
                                </Text>
                                <Text style={styles.postTime}>
                                            {this.props.messageTime}
                                </Text>
                                </View>
                                    <View>
                                        <Text style={styles.messageText}>
                                            {this.props.messageText}
                                        </Text >
                                    </View>
                            
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: "#fff",
    },
    card: {
        width: 100,
        marginBottom: 15
    },
    userName: {
        fontSize: 14,
        fontWeight: "bold",
        //font-family: 'Lato-Regular';
    },
    postTime: {
        fontSize: 12,
        color: "#666",
        //font-family: 'Lato-Regular';
    },
    messageText: {
        fontSize: 14,
        color: "#333333",
    },
    userInfo: {
        flexDirection: "row",
        justifyContent: "center"
    },
    textSection: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 15,
        paddingLeft: 0,
        paddingBottom: 10,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    userInfoText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    iconContainer: {
        marginTop: 20
    }
});

export default MessageCard;