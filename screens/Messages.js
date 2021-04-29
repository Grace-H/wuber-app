import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput,   TouchableOpacity,
  SafeAreaView, } from 'react-native';
import stylesCommon from './styles/stylesCommon';
import MessageCard from "../components/MessageCard.js";
const MessagesList = [
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

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.route.params.email
    };
  }
    render(){
    return (
      <SafeAreaView>
        <Text style = {stylesCommon.textTitleBlue}>Messages</Text>
        <Text>{"\n"}</Text>
      <FlatList
        data={MessagesList}
        renderItem={({ item }) => (
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Chat", { email: this.state.email});
              }}
          >
            <MessageCard
              userName={item.userName}
              messageTime={item.messageTime}
              messageText={item.messageText}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text>
            No messages.
          </Text>
        }
      />
    </SafeAreaView>
    );
}};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
