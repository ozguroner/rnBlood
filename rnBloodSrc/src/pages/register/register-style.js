import React, { Component,StyleSheet } from 'react-native';

const RegisterStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      backgroundColor: '#F5FCFF'
    },
    layoutButtonContainer: {
      margin: 50,
      flex: 1,
      justifyContent: 'space-between'
    },
    instructionsContainer: {
      flex: 3
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
  });

  export default RegisterStyle;