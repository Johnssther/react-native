import React, { PureComponent } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView, Text } from 'react-navigation';

class Home extends PureComponent {


    render() {
        return (
            <SafeAreaView>
                <Text> Home </Text>
            </SafeAreaView>
        )
    }

} 

mapState

export default connect()(Home)