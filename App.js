
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

import Prueba from './src/components/prueba';



export default class App extends Component {
  render() {
    console.log('iniciando ');
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View>
            <Text>React native + Redux + Redux Persist</Text>
            <Prueba/>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}


