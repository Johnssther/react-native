import React, {Component} from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'cascos/src/store';
import AppNavigatorWithState from 'cascos/src/app-navigator-with-state';
import Loader from 'cascos/src/components/loader';


export default class App extends Component {
 render() {
  return (
    <Provider store={store}>
      <PersistGate loading = { <Loader /> }  persistor={persistor}>
        <AppNavigatorWithState />
      </PersistGate>
    </Provider>
  )
 }
}

