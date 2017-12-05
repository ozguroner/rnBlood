import React, { Component,Alert } from 'react-native';

const RegisterScripts = {
       onPressEmailRegisterButton() {
        Alert.alert('You tapped the Email Register!')
      },
       onPressFacebookRegisterButton() {
        Alert.alert('You tapped the Facebook Register!')
      },
       onPressLoginButton() {
        Alert.alert('You tapped the Login!')
      }
  }

  export default RegisterScripts;