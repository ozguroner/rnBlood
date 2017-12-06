import React, { Component } from 'react';
import RegisterStyle from './register-style';
import { SocialIcon,Button } from 'react-native-elements'
import {Platform,Text,View,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class RegisterPage extends Component {
  constructor() {
      super();

      // need to bind `this` to access props in handler
      this.onPressLoginButton = this.onPressLoginButton.bind(this);
      this.onPressEmailRegisterButton = this.onPressEmailRegisterButton.bind(this);
      this.onPressFacebookRegisterButton = this.onPressFacebookRegisterButton.bind(this);
    }
    static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={RegisterStyle.container}>
       <View style={RegisterStyle.instructionsContainer}>
          <Text> {instructions} </Text>
        </View>
        <View style={RegisterStyle.layoutButtonContainer}>
            <Button
            onPress={this.onPressEmailRegisterButton}
            title="Sign In With Email"
            accessibilityLabel=""
            backgroundColor = "#4fa372"
            icon = {{name: 'email'}}/>
            
            <SocialIcon
              title='Sign In With Facebook'
              button
              type='facebook'
              borderRadius = {0}
              onPress={this.onPressFacebookRegisterButton}
            />
            <Button
              onPress={this.onPressLoginButton}
              title="Login"
              accessibilityLabel=""
              backgroundColor = "#a34a49"
              icon = {{name: 'email'}}/>

        </View>
        <View style={RegisterStyle.empty}>
        </View>
      </View>
    );
  }

   onPressEmailRegisterButton() {
    Alert.alert('You tapped the Email Register!');
   }
   onPressFacebookRegisterButton() {
    Alert.alert('You tapped the Facebook Register!');
   }
   onPressLoginButton() {
    const { navigate } = this.props.navigation;
    navigate('Login', { name: 'Login' });
  }
}
