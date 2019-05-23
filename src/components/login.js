import React, { Component } from 'react';
import  { TextInput, View, Text, Button, Image } from 'react-native';


class Login extends Component {
    constructor (props) {
        super(props)
        console.log('pasando por el constructor');
        this.state = { user:'', password:'' };

    }

    onPressButton = () => { 
        this.setState((state, props) => {
            return { user: state.user, password: state.password }
        }) 
        console.log('cambiando de estado');
        console.log('Usuario:',this.state.user);
        console.log('Contraceña:',this.state.password);
        
    }

    render() {
        return (
            <View>
                <Image source={require('../assets/img/koi.png')}
                style={{width: 180, height: 60}}
                ></Image>
                <Text>Usuario</Text>
                <TextInput
                    style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
                    placeholder="Ingrese Usuario"
                    onChangeText={(user) => this.setState({user})}
                />
                <Text>Contrasettña</Text>
                <TextInput
                    style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
                    placeholder="Ingrese Contracerña"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />
                <Text></Text>
                <Button
                onPress={this.onPressButton}
                title="Iniciar Sesión"
                color="#006400"
                accessibilityLabel="Learn more about this purple button"
                />

            </View>
        )
    }
}

export default Login;