
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { createAppContainer, NavigationActions } from 'react-navigation';

import AppNavigator from './app-navigator';

const Navigation = createAppContainer(AppNavigator);

class AppNavigatorWithState extends Navigation {
 componentDidMount = () => {
   BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
 }

 componentWillUnmount = () => {
   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
 }

 onBackPress = () => {
   // Default Back
   this.props.dispatch( NavigationActions.back({ key: null }) )
   return true
 }
}

const mapStateToProps = state => ({
 state: state.navigation
})

export default connect(mapStateToProps)(AppNavigatorWithState)
