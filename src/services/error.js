import { Alert } from 'react-native'

export const handleErrors = (response) => {
    if(response) {
        if(response.status === 500 ) {
            Alert.alert('Error del servidor')
        }
    } else {
        //code..
    }
}

export const generalError = (error) => {
    if(error == 'TypeError:Network request failed') {
        Alert.alert('Error de red, Conectese a internet')
    } else {
        
    }
};