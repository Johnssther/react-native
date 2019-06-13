import React from 'react';
import { SafeAreaView, StatusBar, Image, Text } from 'react-native';
import styles from '../stylesheets/loader'


 Loader = (props)  => {
    return(
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="blue"  hidden={true} />
          <Image source={require('../assets/img/koi.png')} style={styles.logo}/>
          <Text>Realizado por Koi-ti</Text>
      </SafeAreaView>
    )
}

export default Loader