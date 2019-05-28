
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

import Prueba from './src/components/prueba';
import Login from './src/components/login';
import AppNavigatorWithState from './src/app-navigation-with-state';



export default class App extends Component {
  render() {
    console.log('iniciando ');
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          
        </PersistGate>
      </Provider>
    );
  }
}


