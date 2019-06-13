import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { TextInput, View, Text, Button, Image } from 'react-native';
import { actions } from '../redux/actions/index';
import styles from '../stylesheets/loader'

class Login extends Component {
    
    press = () => {
        this.props.dispatch(actions.session.setUser({ id: 1, name: 'John' }))
        this.props.navigation.navigate('Loading');
    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                <Text>Usuario</Text>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Ingrese Usuario"
                  //  onChangeText={(user) => this.setState({ user })}
                />
                <Text>Contrasettña</Text>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Ingrese Contracerña"
                    secureTextEntry={true}
                   // onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    onPress={this.press}
                    title="Iniciar Sesión"
                    color="#006400"
                   // accessibilityLabel="Learn more about this purple button"
                />

            </SafeAreaView>
        )
    }
}
// conecta el componente a redux
const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Login);
