import React, {Component} from 'react';
import { TextInput, Text, View } from 'react-native';

export default class InputText extends Component{
    constructor(props){
      super(props);
      this.state = {text: ''};
    }
    render(){
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    }
  }