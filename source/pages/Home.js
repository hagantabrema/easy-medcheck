import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'

const Home = () => {
    const [text, setText] = useState('');
    return (
        <View>
            <View style={styles.input}>
                <TextInput
                    placeholder="Cari gejala penyakit"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    input: {
        width: 320,
        height: 46,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: ACTIVE_COLOR
    }
})
