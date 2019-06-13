import React from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import { StyleSheet } from '../stylessheets/loader';

function Loader(props) {
    return(
        <SafeAreaView>
            <StatusBar hidden={true} />
            <Image source={require('../assets/img/logo.png')} style={StyleSheet.logo}/>
        </SafeAreaView> 
        
        
    )
}

export default Loader