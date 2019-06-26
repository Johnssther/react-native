import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StatusBar, Button } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/index';
import styles from '../stylesheets/loader';
// import { Button } from 'react-native-elements';



class Setting extends PureComponent {
    logout = () => {
        this.props.dispatch(actions.session.logout());
        this.props.navigation.navigate('Loading')
    }
    render() {
        const { user } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="orange" hidden={false} />
                <Text>Logout {user.name}</Text>
                
                <Button
                    onPress={this.logout}
                    title="Cerrar Sesión"
                    color="red"
                />
                


            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Setting)


