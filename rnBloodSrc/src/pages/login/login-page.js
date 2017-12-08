import React, { Component } from 'react';
import { Platform, TextInput, Button, View, Alert, Picker } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

export default class LoginPage extends Component {
  constructor() {
    super();
    // need to bind `this` to access props in handler
    this.onPressSubmitButton = this.onPressSubmitButton.bind(this); 
  };
  
  state = { bloodGroup: '' };
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <FormLabel>Username</FormLabel>
          <FormInput />
          <FormLabel>Email</FormLabel>
          <FormInput />
          <Button
            title="Submit"
            accessibilityLabel=""
            medium
            onPress={this.onPressSubmitButton}
            backgroundColor="#a34a49" />
        </View>
      </View>
    );
  }

  onPressSubmitButton() {
    Alert.alert("Submit button pressed")
  }
}
