import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';

import { Loading } from './components/loading';

const SwitchNavigator = createSwitchNavigator(

{
    Loading
},
{
    initialRouteName: 'Loading',
}
)

export default SwithNavigator;