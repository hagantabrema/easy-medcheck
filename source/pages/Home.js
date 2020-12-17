import React, { useState, Component } from 'react'
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onChangeText = (namaState, defaultValue) => {
        this.setState({
            [namaState]: defaultValue,
        });
    };

    render() {
        const { text } = this.state;
        return (
            <View style={{ flex: 2, }}>

                {/* SEARCH BAR */}
                <View style={{ flexDirection: 'row', width: "90%", margin: 10, backgroundColor: "#C14950", marginLeft: 17, borderRadius: 10 }}>
                    <View style={{ margin: 5 }}>
                        <Image source={require('../assets/icons/search.png')} />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Cari gejala penyakit..."
                            //placeholderTextColor="#000"
                            onChangeText={this.onChangeText}
                            defaultValue={this.state.text}
                        />
                    </View>
                </View>

                {/* ICON BAR */}
                <View style={{ flex: 2, }}>
                    <View style={[{ flexDirection: 'row', width: "90%", height: 100, margin: 10, backgroundColor: "#C14950", marginLeft: 17, borderRadius: 10 }]}>
                        <View style={[{ width: "20%", height: 50, margin: 22, justifyContent: 'space-around', alignItems: 'center', backgroundColor: "white", borderRadius: 10 }]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Klinik')}>
                                <Image source={require('../assets/icons/klinik.png')} />
                            </TouchableOpacity>
                            <View style={[{ width: "100%", height: 4, marginBottom: -20, marginTop: 10, justifyContent: 'space-around', alignItems: 'center' }]}>
                                <Text style={{ color: "white" }}>Klinik</Text>
                            </View>
                        </View>
                        <View style={[{ width: "20%", height: 50, margin: 22, justifyContent: 'space-around', alignItems: 'center', backgroundColor: "white", borderRadius: 10 }]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MedCheck')}>
                                <Image source={require('../assets/icons/medcheck.png')} />
                            </TouchableOpacity>
                            <View style={[{ width: "100%", height: 4, marginBottom: -20, marginTop: 10, alignItems: 'center' }]}>
                                <Text style={{ color: "white" }}>MedCheck</Text>
                            </View>
                        </View>
                        <View style={[{ width: "20%", height: 50, margin: 22, justifyContent: 'space-around', alignItems: 'center', backgroundColor: "white", borderRadius: 10 }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('News')}>
                                <Image source={require('../assets/icons/news.png')} />
                            </TouchableOpacity>
                            <View style={[{ width: "100%", height: 4, marginBottom: -20, marginTop: 10, justifyContent: 'space-around', alignItems: 'center' }]}>
                                <Text style={{ color: "white" }}>News</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flex: 5,
                    }}
                >
                    {/* BERITA */}
                    <ScrollView>
                        <View style={styles.table}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20 }}>News</Text>
                        </View>

                        <View style={styles.table}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20 }}>News</Text>
                        </View>

                        <View style={styles.table}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20 }}>News</Text>
                        </View>

                        <View style={styles.table}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20 }}>News</Text>
                        </View>

                        <View style={styles.table}>
                            <Text style={{ fontSize: 20, marginLeft: 50, marginTop: 20, }}>News</Text>
                            <Text style={{ fontSize: 16, marginLeft: 50, marginBottom: 20 }}>News</Text>
                        </View>
                    </ScrollView>
                </View>
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