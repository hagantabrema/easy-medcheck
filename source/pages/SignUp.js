import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'

export default class SignUp extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                        marginTop: 150,
                        alignItems: "center"
                    }}
                >
                    <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 8, fontSize: 24, fontWeight:'bold' }}>Sign Up</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 8
                    }}
                >
                     <TextInput
                        placeholder="Nama"
                        style={{
                            borderBottomWidth: 1,
                            marginBottom: 8
                        }}
                    />
                     <TextInput
                        placeholder="Email"
                        style={{
                            borderBottomWidth: 1,
                            marginBottom: 8
                        }}
                    />
                    <TextInput
                        placeholder="Username"
                        style={{
                            borderBottomWidth: 1,
                            marginBottom: 8
                        }}
                    />
                    <TextInput
                        placeholder="Password"
                        style={{
                            borderBottomWidth: 1,
                            marginBottom: 8
                        }}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold' }}>SUBMIT</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", marginTop: 60 }}>Telkom Digital Talent 2020</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: ACTIVE_COLOR,
        padding: 12,
        borderRadius: 10,
        marginTop: 10
    },
})
