import React, { Component } from 'react';
import RegisterStyle from './register-style';
import RegisterScripts from './register-scripts';
import {Platform,Text,Button,View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class RegisterPage extends Component {
  render() { 
    return (
      <View style={RegisterStyle.container}>
       <View style={RegisterStyle.instructionsContainer}>
          <Text> {instructions} </Text>
        </View>
        <View style={RegisterStyle.layoutButtonContainer}>
          <Button style={RegisterStyle.btnGeneric}
          onPress={RegisterScripts.onPressEmailRegisterButton}
          title="Join via Email"
          accessibilityLabel=""/>
          <Button style={RegisterStyle.btnGeneric}
          onPress={RegisterScripts.onPressFacebookRegisterButton}
          title="Join via Facebook" 
          accessibilityLabel=""/>
          <Button style={RegisterStyle.btnGeneric}
          onPress={RegisterScripts.onPressLoginButton}
          title="Login"
          accessibilityLabel=""/>
        </View>
      </View>
   
    );
  }
}


