import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Klinik = () => {
    return (
        <View>
            {/* STATUS BAR */}
            <View style={{ flexDirection: 'row', backgroundColor: "#C14950" }}>
                <View style={{ margin: 15 }}>
                    <Image source={require('../assets/icons/backArrow.png')} />
                </View>
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

export default Klinik

const styles = StyleSheet.create({
    textStatus: {
        color: 'white',
        marginTop: 12,
        fontSize: 18,
        fontWeight: 'bold'
    },
})
