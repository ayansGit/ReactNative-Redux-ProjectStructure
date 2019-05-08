import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from 'react-navigation';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                alignItems: 'center',
                paddingTop: 20
            }}>

                <View style={{ height: 120, width: "100%" }}>

                </View>

                <View style={{ width: '100%' }}>

                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
                        onPress={() => { this.props.navigation.navigate('Home') }} >
                        <Icon name="list" size={20} color="#900" style={{
                            marginRight: 10,
                            marginLeft: 20
                        }} />
                        <Text style={{ fontSize: 20 }}> Home </Text>
                    </TouchableOpacity>

                    <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 20 }} />

                </View>

            </View>
        )

    }


}


export default Sidebar;

