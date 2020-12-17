import React, { useState, Component } from 'react'
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class News extends Component {
    render() {
        return (
            <View>
                {/* BERITA */}
                <ScrollView>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, marginRight: 10 }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20, marginRight: 10 }}>Info Solo Lockdown Sampai Januari: Hoax! </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 5
    },
    table: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20
    }
})