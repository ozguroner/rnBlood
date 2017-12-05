import React, { Component } from 'react';
import {Platform,Text,Button,View} from 'react-native';

export default class LoginPage extends Component {
    render() { 
    const { navigate } = this.props.navigation;
      return (
        <View>
          <View>
          <TextInput
          style={{height: 10, borderColor: 'gray'}}
         // onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
          </View>
        </View>
     
      );
    }
}