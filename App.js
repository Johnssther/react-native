import React, {Component} from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'cascos/src/store';
import AppNavigatorWithState from 'cascos/src/app-navigator-with-state';


export default class App extends Component {
 render() {
   return (
     <Provider store={store}>
       <PersistGate loading={<Loading />} persistor={persistor}>
         <AppNavigatorWithState />
       </PersistGate>
     </Provider>
   )
 }
}

