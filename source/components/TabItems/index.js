import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { HomeIcon, HomeActiveIcon, CheckIcon, CheckActiveIcon, KlinikIcon, KlinikActiveIcon } from 'EasyMedCheck/source/assets/icons'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../../utils/constant'

const TabItems = ({ isFocused, onPress, onLongPress, label }) => {

    const Icon = () => {
        if (label === "Home") return isFocused ? <HomeActiveIcon/> : <HomeIcon/>

        if (label === "MedCheck") return isFocused ? <CheckActiveIcon/> : <CheckIcon/>

        if (label === "Klinik") return isFocused ? <KlinikActiveIcon/> : <KlinikIcon/>

        return <HomeIcon/>
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    text: (isFocused) => ({
        fontSize: 0,
        color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR
    })
})