
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class Loading extends Component {

  render() {
    const { session } = this.props;

    return (
      <Text>OK</Text>
      <Text>OK</Text>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Loading) 
