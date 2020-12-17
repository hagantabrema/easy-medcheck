import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'

export default class Login extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}
                >
                    <Image
                        style={{
                            width: 250,
                            height: 250,
                            marginBottom: 8, //kalau di css margin-bottom -> jsx marginBottom
                        }}
                        source={require('../assets/images/logo.png')} // pastikan di foldernya ada file logo.png 1 level dengan file App.js
                    />
                    <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 8 }}>Login</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 8
                    }}
                >
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
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('MainApp')}>
                        <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold' }}>SUBMIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Don't have an accout? Sign Up</Text>
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
