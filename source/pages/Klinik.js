import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class Klinik extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                {/* STATUS BAR */}
                <View style={{ flexDirection: 'row', backgroundColor: "#C14950" }}>
                    <TouchableOpacity style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../assets/icons/backArrow.png')} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textStatus}>Klinik Terdekat</Text>
                    </View>
                </View>
    
                {/* MAPS */}
                <View>
                    <Image source={require('../assets/images/dummyloc.png')} />
                    <Text style={{ alignItems: 'center' }}>Dummy Gmaps</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStatus: {
        color: 'white',
        marginTop: 12,
        fontSize: 18,
        fontWeight: 'bold'
    },
})