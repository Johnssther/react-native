import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import Loading from './components/loading';

const SwitchNavigator = createSwitchNavigator(
  {
      Loading
  },
  {
      initialRouteName: 'Loading',
  }
)

export default SwitchNavigator;