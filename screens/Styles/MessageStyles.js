import { StyleSheet } from "react-native";

export default StyleSheet.create({

Container: {
  flex: 1,
  paddingLeft: 20,
  paddingRight: 20,
  alignItems: "center",
  paddingTop: 40,
  backgroundColor: "#fff",
},

Card: {
  width: 100
},

UserInfo: {
  flexDirection: row,
  justifyContent: "space-between"
},

UserImgWrapper: {
  paddingTop: 15,
  paddingBottom: 15
},

UserImg: {
  width: 50,
  height: 50,
  borderRadius: 25,
},

TextSection: {
  flexDirection: "column",
  justifyContent: "center",
  padding: 15,
  paddingLeft: 0,
  marginLeft: 10,
  width: 300,
},

UserInfoText: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginCottom: 5,
},

UserName: {
  fontSize: 14,
  fontWeight: "bold",
  //font-family: 'Lato-Regular';
},

PostTime: {
  fontSize: 12,
  color: "#666",
  //font-family: 'Lato-Regular';
},

MessageText: {
  fontSize: 14,
  color: "#333333",
},
});