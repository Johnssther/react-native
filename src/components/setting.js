import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StatusBar, Button } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/index';
import styles from '../stylesheets/loader';



class Settings extends PureComponent {
    press = () => {
        this.props.dispatch(actions.session.logout())

        this.props.navigation.navigate('Loading');
        console.log(this.props);
    }
    render() {
        const { user } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="orange"  hidden={false} />
                <Text> Bienvenido al Home </Text>
                <Button
                    onPress={this.press}
                    title="Cerrar Sesión"
                    color="green"
                    accessibilityLabel="Learn more about this purple button"
                />

            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Settings)