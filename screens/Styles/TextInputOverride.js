import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet} from 'react-native';


export default function TextInputOverride(props) {
    const [focus, setFocus] = React.useState(props.focus);
    return (
        <View style={[styles.container,
        props.style,
        focus ? styles.focused: styles.notFocused]}>
            <TextInputOverride
            setFocus={focus} //whatever focus state holds
            onChangeText={text => props.onChangeText(text)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            style={styles.textInput}
            placeholder={props.placeholder} />
        </View>
        );
}


/*
const TextInputOver = (props) => {
    const [focus, setFocus] = React.useState(props.focus);
    const [secure, setSecure] = React.useState(props.secure);
    return (
       <View>
          <Text onChangeText = {props.updateText}>
             {props.myText}
          </Text>
       </View>
    )
 }
class TextInputOverride extends React.Component {
    text = {
        myText: '                '
    }
    updateText = (value) => {
        this.setState({ myText: console.log(value)})
    }

    
    render() {   
    return (
        <View style={[styles.container,
        focus ? styles.focused: styles.notFocused]}>
            <TextInputOver myText = {this.text.myText} updateText = {this.updateText}
            style = {styles.textInput}
            setFocus = {focus}
            onFocus = {() => setFocus(true)}
            onBlur={() => setFocus(false)}
            secureTextEntry = {secure}
            />
        </View>
        );
    }
}*/
    const styles = StyleSheet.create({
        focused: {
        color: "#808080",
        backgroundColor: "#FFFFFF",
        borderColor: "#40E0D0",
        borderWidth: 1,
        },
        textInput:
        {
        borderRadius: 5,
        paddingLeft: 15,
        width: 290
        },
        notFocused: {
        color: "#808080",
        backgroundColor: "#D3D3D3"
        },
        container: {
        flexDirection: 'row',
        borderRadius: 5,
        width: 312,
        justifyContent: 'center',
        padding: 3,
        alignItems: 'center',
        height: 50
        },
        inputStyle: {
        flex: 1,
        },
     });
 
