import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

class Prueba extends Component { 
  constructor (props) {
    super(props)
    console.log('pasamos por el constructor');
    this.state = { session:false, counter:0};
    
  }

  onPressButton = () => {
    this.setState((state,props) => {
      return { session: !state.session, counter: state.counter+1 }
    })
    console.log('cambiando de estado');
  }

  render() {
    console.log('pasamos por la funcion del render');
    return (
      <View>
        <Button
        onPress={this.onPressButton}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text> A presionado  { this.state.counter } veces </Text>
        
        {this.state.session &&
          <Text> Session Iniciada </Text>
        }
        
        
        
        

      </View>
    )
  }
}

export default Prueba;