import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class Loading extends Component {

  render() {
    const { session } = this.props;

    return (
      <View>
        <Text>
          Inicializando aplicación...
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Loading) 
