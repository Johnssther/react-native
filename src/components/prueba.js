import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';
import { store } from '../store';

import { connect } from 'react-redux';

class Prueba extends Component { 


  onPressButton = () => {
  
    store.dispatch({
      type: 'INCREMENT_COUNTER'
    })

  }

  render() {
    const { session } = this.props;
    console.log('session desde redux', session);
  
    return (
      <View>

        <Button
        onPress={this.onPressButton}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text> A presionado veces {session.counter} </Text>
      </View>
    )
  }
}


const mapStateToProps = state => ({
  session: state.session 
})

export default connect(mapStateToProps)(Prueba);