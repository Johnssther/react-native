import { Component } from 'react-native';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { BackHandler } from 'reac-native';
import { NavigationActions} from 'react-native';

import { AppNavigator }  from'./app-navigator';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root')

class AppNavigatorWithState extends ReduxifyApp {

    componentDidMount = () => {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
  
    componentWillUnmount = () =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
  
    onBackPress = () => {
      // Default Back
      this.props.dispatch(
        NavigationActions.back({ key: null })
      )
      return true
    }
  
  
  const mapStateToProps = state => ({
    state: state.navigation
  })
  
  export default connect(mapStateToProps)(AppNavigatorWithState)
  