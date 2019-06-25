import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Loading from './components/loading';
import Login from './components/login';
import Home from './components/home';
import Setting from './components/setting';
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabNavigator = createBottomTabNavigator(
  {
    Setting,
    Home
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Setting') {
          iconName = `ios-settings`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'red',

      labelStyle: {
        fontSize: 13,
      }
    }
  }
)


const SwitchNavigator = createSwitchNavigator(
  {
      Loading,
      Login,
      TabNavigator
  },
  {
      initialRouteName: 'Loading',
  }
)

export default SwitchNavigator;