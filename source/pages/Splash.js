import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { SplashScreen, Logo, LogoText } from '../assets'

//Splash Screen
const Splash = ({ navigation }) => {

    //navigation dari splash screen ke home, 2000 itu 2000ms = 2 detik => durasi splash screen
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000)
    }, [navigation]);

    return (
        <ImageBackground source={SplashScreen} style={styles.background}>
            <Image source={LogoText} style={styles.logoText} />
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 250,
    },
    logoText: {
        alignItems: 'center'
    }
})
