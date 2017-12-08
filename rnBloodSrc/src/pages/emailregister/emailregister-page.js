import React, { Component } from 'react';
import { Platform, TextInput, Button, View, Alert, Picker } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

export default class EmailRegisterPage extends Component {
  constructor() {
    super();
    // need to bind `this` to access props in handler
    this.onPressSubmitButton = this.onPressSubmitButton.bind(this);
    this.updateBloodGroup = this.updateBloodGroup.bind(this);
   
  };
  
  state = { 
    bloodGroup: '',
    rhesus: ''
   };

  static navigationOptions = {
    title: 'Email Register',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <FormLabel>Username</FormLabel>
          <FormInput />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry={true} />
          <FormLabel>Email</FormLabel>
          <FormInput />
          <FormLabel>Blood Group</FormLabel>
          <Picker selectedValue={this.state.bloodGroup} onValueChange={this.updateBloodGroup}>
            <Picker.Item label="Choose..." value="-" />
            <Picker.Item label="0" value="0" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="AB" value="AB" />
          </Picker>
          <FormLabel>Rhesus</FormLabel>
          <Picker selectedValue={this.state.rhesus} onValueChange={this.updateRhesus}>
            <Picker.Item label="Choose..." value="-" />
            <Picker.Item label="Rh (+)" value="1" />
            <Picker.Item label="Rh (-)" value="0" />
          </Picker>
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

  updateBloodGroup = (bloodGroup) => {
    this.setState({ bloodGroup: bloodGroup })
  }

  updateRhesus = (rhesus) => {
    this.setState({ rhesus: rhesus })
  }

  onPressSubmitButton() {
    Alert.alert("Submit button pressed")
  }
}
