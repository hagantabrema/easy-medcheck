import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Klinik = () => {
    return (
        <View>
            <Image source={require('../assets/images/dummyloc.png')} />
            <Text style={{alignItems: 'center'}}>Dummy Gmaps</Text>
        </View>
    )
}

export default Klinik

const styles = StyleSheet.create({})
