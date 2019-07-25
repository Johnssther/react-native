import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StatusBar, Button, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getPlaces } from '../services/user';
import PlacesItem from '../components/placesItem';

class Home extends PureComponent {
    keyExtractor = item => item.sitio_codigo.toString()
    componentDidMount() {
        this.props.actions.getPlaces();
    }

    render() {
        const { user, places } = this.props
        return (
            <SafeAreaView>
                <FlatList
                    data={places}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) => <PlacesItem item={item} />}
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