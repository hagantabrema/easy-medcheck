import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'

export default class Profile extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                {/* STATUS BAR */}
                <View style={{ flexDirection: 'row', backgroundColor: "#C14950" }}>
                    <TouchableOpacity style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('MedCheck')}>
                        <Image source={require('../assets/icons/backArrow.png')} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textStatus}>Profil</Text>
                    </View>
                </View>

                {/* DETAIL PENGGUNA */}
                <View style={styles.titleBackground}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Haganta Brema Bangun</Text>
                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', marginTop: 15 }}>hagantabrema</Text>
                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center'}}>hagantabangun@gmail.com</Text>
                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center'}}>Bandung, Jawa Barat</Text>
                </View>

                {/* BUTTON */}
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold' }}>LOG OUT</Text>
                </TouchableOpacity>
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
    titleBackground: {
        backgroundColor: ACTIVE_COLOR,
        padding: 50
    },
    button: {
        backgroundColor: ACTIVE_COLOR,
        padding: 12,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 40,
        marginRight: 40
    }
})