import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput, Touchable } from 'react-native';
import stylesCommon from './styles/stylesCommon';
import MessageStyles, {
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { email } from '@sideway/address';

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
    state = {
        email: "",
        password: ""
    }
    render(){
    return (
      <Container>
        <Text style = {stylesCommon.textTitleBlue}>Messages</Text>
        <Text>{"\n"}</Text>
        <FlatList 
          data={MessagesList}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Chat", { email: this.state.email, password: this.state.password});
              }}
            >
                <Card>
                <View style = {MessageStyles.UserInfo}>
                    <View style = {MessageStyles.TextSection}>
                    <View style = {MessageStyles.UserInfoText}>
                        <Text style = {MessageStyles.UserName}>{item.userName}</Text>
                        <Text style = {MessageStyles.PostTime}>{item.messageTime}</Text>
                    </View>
                    <Text styl = {MessageStyles.MessageText}>{item.messageText}</Text>
                    </View>
                </View>
                </Card>
            </TouchableOpacity>
          )}
        />
      </Container>
    );
}};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
