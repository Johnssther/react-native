import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StatusBar, Button } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/index';
import styles from '../stylesheets/loader';
import { Badge } from 'react-native-elements';




class Home extends PureComponent {
    logout = () => {
        this.props.dispatch(actions.session.logout())
        this.props.navigation.navigate('Loading');
    }

    render() {
        const { user } = this.props
        return (
            <SafeAreaView>
                <Badge value={user.name} status="error" />
                <Text>Bienvenido {user.name} al inicio</Text>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Home)