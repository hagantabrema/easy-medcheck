import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { SplashScreen, Logo, LogoText } from '../assets'

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 2000)
    }, [navigation]);

    return (
       <ImageBackground source={SplashScreen} style={styles.background}>
           <Text source={Text} style={styles.logoText}/>
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
        height: 250
    },
    logoText: {
        alignItems: 'center'
    }
})
