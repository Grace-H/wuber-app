/**
 * Common Text, Button, View styles
 * stored in one accessible location.
 * 
 * Last editted: 22 Mar Grace
 */

//stylesCommon.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40
    },
    customBtnSM: {
        backgroundColor: "#007aff",
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30
    },  
    customBtnTextWhite: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '200',
        color: "#fff",
    },
    customBtnBG: {
        backgroundColor: "#fff",
        elevation: 3,
        backgroundColor: '#147EFB',
        shadowOffset: {width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30
    },  
    customBtnTextBlue: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '200',
        color: "#147EFB",
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 30,
        color: '#EE8A22',
        fontWeight: '300',
        marginTop: 50,
        width: 350,
    },
    textTitleBlue: {
        textAlign: 'center',
        fontSize: 30,
        color: '#147EFB',
        fontWeight: '500',
        marginTop: 30,
        width: 350,
    },
    textSub: {
        fontSize: 20,
        fontWeight: '200',
        color: '#979A9A'
    },
    textBod: {
        textAlign : 'center',
        fontSize: 20,
        fontWeight: '200',
        color: '#000000',
    },
    //use absolute positioning to keep it right below the app header?
    appHeader : {
        height : 60, 
        width : 1000,
        textAlign: 'center',
        fontSize: 45,
        color: '#EE8A22',
        fontWeight: '300',
        marginBottom: 50,
        marginTop: 5,
        backgroundColor : '#0041AD',
    },
});