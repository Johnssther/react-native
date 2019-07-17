import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StatusBar, Button, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../redux/actions/index';
import styles from '../stylesheets/loader';
import { getPlaces } from '../services/user';

class Home extends PureComponent {
    componentDidMount() {
        this.props.actions.getPlaces();
    }

    render() {
        const { user, places } = this.props
        return (
            <SafeAreaView>
                <FlatList
                    data={places}
                />
            </SafeAreaView>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    actions: {
        getPlaces: () => {
            console.log('recuperando datos');
            dispatch(getPlaces());

        }
    }
})

const mapStateToProps = state => ({
    user: state.session.user,
    places: state.places
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)