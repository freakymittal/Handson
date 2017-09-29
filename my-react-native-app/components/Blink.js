import React, {Component} from 'react';
import { Text } from 'react-native';

export default class Blink extends Component{
    constructor(props){
      super(props);
      this.state = {showText: true};
      setInterval(() => {
        this.setState(prev => {
          return { showText: !prev.showText};
        });
      }, 1000);
    }
    render(){
      let display = this.state.showText ? this.props.text: ' ';
      return (
        <Text>{display}</Text>
      );
    }
  }