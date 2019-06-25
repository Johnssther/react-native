import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/index';
import styles from '../stylesheets/loader';
import { Avatar } from 'react-native-elements';



class Perfil extends PureComponent {
    logout = () => {
        this.props.dispatch(actions.session.logout());
        this.props.navigation.navigate('Loading')
    }
    render() {
        const { user } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="orange" hidden={false} />
                <Avatar
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                />
                <Text> Nombre: { user.name } </Text>
                <Text> Identificación: 00{ user.id } </Text>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Perfil)


