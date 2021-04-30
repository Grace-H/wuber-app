
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
            //email: this.props.route.params.email,
            email: fire.email
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


/*
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import stylesCommon from './styles/stylesCommon';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './styles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Lily Cooper',
    //userImg: <Ionicons name="arrow-down" size={22} color="#333" />,
    messageTime: '4 mins ago',
    messageText:
      "I'm waiting in the lobby. Let me know when you're here and I'll come out.",
  },
  {
    id: '3',
    userName: 'Nate Brown',
    //userImg: <Ionicons name="arrow-down" size={22} color="#333" />,
    messageTime: '17 hours ago',
    messageText:
      "Hey! Yeah, that's fine. See you tomorrow:)",
  },
  {
    id: '2',
    userName: 'Alice Lee',
    //userImg: <Ionicons name="arrow-down" size={22} color="#333" />,
    messageTime: '3 days ago',
    messageText:
      'Almost there!',
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <Container>
        <Text style = {stylesCommon.textTitleBlue}>Messages</Text>
        <Text>{"\n"}</Text>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card>
              <UserInfo>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
        <TextInput secureTextEntry={true}/>
      </Container>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
*/