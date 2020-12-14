import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    StyleSheet,
    Button,
    onPress, 
    ScrollView,
    AppRegistry
} from 'react-native';

export default class MedCheck extends Component {

    constructor() {
        super()
        this.state = {
            gejala1: '',
        }
    }

    render() {
        return (
            <View style={{flex: 3}}>
                <View style={{ flexDirection: 'row', width: "90%", margin: 15, marginLeft: 17, borderRadius: 10, alignContent: 'space-around' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>Easy Medcheck</Text>
                    <Image style={{ height: 90, width: 90, marginLeft: 30 }} source={require('../assets/images/logo.png')} />
                </View>
                <View>
                    <View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder="Masukkan gejalamu disini"
                                onChangeText={(text) => { this.setState({ gejala1: text }) }}
                            />
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', margin: 10 }}> {this.state.gejala1}</Text>
                    </View>
                </View>
                <View style={{alignContent: 'center', marginTop: 350, margin: 10}}>
                <Button 
                    title="SUBMIT"
                    onPress={() => navigation.navigate('MedCheckResults')}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 320,
        height: 46,
        marginLeft: 17,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
    },
    text: {
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
