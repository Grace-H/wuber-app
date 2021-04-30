
import React from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { Bubble, Send, GiftedChat } from 'react-native-gifted-chat';
import {Ionicons} from 'react-native-vector-icons';
import fire from '../backend/fire.js';

export default class ChatScreen extends React.Component {
    state = {
        messages: []
    }

    get user() {
        return {
            _id: fire.uid,
            name: "",
        }
    }

    componentDidMount() {
        fire.get(message => 
            this.setState(previous => ({
                messages: GiftedChat.append(previous.messages, message)
            }))
        );
    }

    componentWillUnmount() {
        fire.off();
    }

    render() {


        
          const renderBubble = (props) => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: {
                    backgroundColor: '#2e64e5',
                  },
                }}
                textStyle={{
                  right: {
                    color: '#fff',
                  },
                }}
              />
            );
          };

          const scrollToBottomComponent = () => {
            return(
                <Ionicons name="arrow-down" size={22} color="#333" />
            );
          }

        const chat = <GiftedChat 
        messages={this.state.messages} 
        onSend={fire.send} user={this.user} 
        renderBubble={renderBubble}
        alwaysShowSend
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        />;

        if (Platform.OS === 'android') {
            return (
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
    }
  }