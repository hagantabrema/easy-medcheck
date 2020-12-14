import React, { useState, Component } from 'react'
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from 'react-native-gesture-handler';


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
                <View style={{ flexDirection: 'row', width: "90%", margin: 10, backgroundColor: "#C14950", marginLeft: 17, borderRadius: 10 }}>
                    <View style={{ margin: 5 }}>
                        <Image style={styles.icon} source={require('../assets/icons/search.png')} />
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Cari gejala penyakit"
                            onChangeText={this.onChangeText}
                            defaultValue={this.state.text}
                        />
                    </View>
                </View>
                <View style={{ flex: 2, }}>
                    <View style={[{ flexDirection: 'row', width: "90%", height: 100, margin: 10, backgroundColor: "#C14950", marginLeft: 17, borderRadius: 10 }]}>
                        <View style={[{ width: "20%", height: 50, margin: 22, justifyContent: 'space-around', alignItems: 'center', backgroundColor: "white", borderRadius: 10 }]}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Klinik')}>
                                <Image style={styles.icon} source={require('../assets/icons/klinik.png')} />
                            </TouchableHighlight>
                            <View style={[{ width: "100%", height: 4, marginBottom: -20, marginTop: 10, justifyContent: 'space-around', alignItems: 'center' }]}>
                                <Text style={{ color: "white" }}>Klinik</Text>
                            </View>
                        </View>
                        <View style={[{ width: "20%", height: 50, margin: 22, justifyContent: 'space-around', alignItems: 'center', backgroundColor: "white", borderRadius: 10 }]}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('MedCheck')}>
                                <Image style={styles.icon} source={require('../assets/icons/medcheck.png')} />
                            </TouchableHighlight>
                            <View style={[{ width: "100%", height: 4, marginBottom: -20, marginTop: 10, alignItems: 'center' }]}>
                                <Text style={{ color: "white" }}>MedCheck</Text>
                            </View>
                        </View>
                        <View style={[{ width: "20%", height: 50, margin: 22, justifyContent: 'space-around', alignItems: 'center', backgroundColor: "white", borderRadius: 10 }]}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('News')}>
                                <Image style={styles.icon} source={require('../assets/icons/news.png')} />
                            </TouchableHighlight>
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
        width: 320,
        height: 46,
        marginLeft: 17,
        borderRadius: 5,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
