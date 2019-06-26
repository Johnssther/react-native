import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, View, Text, Image, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
//import { NavigationActions } from 'react-navigation';

import { actions } from '../redux/actions/index';
import styles from '../stylesheets/loader'
import Loader from './loader';



class Login extends Component {

    /* 
        constructor  (props)  {
            super(props);
    
            this.state = {  
                loading : false
            }
        } */

    /*   press = () => {
          this.setState({ loading:true });
          this.props.actions.onLogin();
      } */

    render() {
        const { loading } = this.props;

        if ( loading ) {
            return <Loader />
        }
        return (


            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                <Text>Usuario</Text>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Ingrese Usuario"
                //  onChangeText={(user) => this.setState({ user })}
                />
                <Text>Contraceña</Text>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Ingrese La Contraceña"
                    secureTextEntry={true}
                // onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    onPress={this.props.actions.onLogin}
                    title="Iniciar Sesión"
                    type="outline"
                    loading={loading}

                />

            </SafeAreaView>
        )
    }
}


// conecta el componente a redux
const mapStateToProps = state => ({
    user: state.session.user,
    loading: state.session.loading,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        onLogin: () => {
            dispatch(actions.session.loading(true))
            setTimeout(() => {
                dispatch(actions.session.setUser({ id: 1, name: 'John' }))
                dispatch(actions.session.loading())
                ownProps.navigation.navigate('Loading')

            }, 1000);
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
