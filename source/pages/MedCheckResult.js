import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'

export default class MedCheckResult extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View>
                {/* STATUS BAR */}
                <View style={{ flexDirection: 'row', backgroundColor: "#C14950" }}>
                    <TouchableOpacity style={{ margin: 15 }} onPress={() => this.props.navigation.navigate('MedCheck')}>
                        <Image source={require('../assets/icons/backArrow.png')} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textStatus}>Hasil Analisa</Text>
                    </View>
                </View>

                {/* NAMA PENYAKIT */}
                <View style={styles.titleBackground}>
                    <Text style={styles.textTitle}>Flu</Text>
                </View>

                {/* DESKRIPSI PENYAKIT */}
                <ScrollView>
                    <Text style={{ padding: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus posuere magna, eget tincidunt odio imperdiet nec. Nam ultricies, lacus at blandit porta, augue sapien fermentum felis, eu vehicula diam arcu nec dui. Ut nec nisi vel nulla tincidunt dapibus et et tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit pharetra blandit. Morbi diam velit, volutpat eu dui id, malesuada dictum tellus. Pellentesque nisi quam, vulputate nec sagittis vitae, lacinia quis risus. Donec feugiat accumsan nunc at accumsan. Suspendisse pharetra elit eget consectetur porttitor. Duis tincidunt consectetur elit, a pharetra enim fermentum in. Mauris dictum eleifend sapien id varius. Ut sagittis ipsum venenatis nulla varius semper. Maecenas iaculis scelerisque nisi, ut pulvinar sem dapibus eget. Phasellus laoreet tellus est, vel viverra nibh consectetur et. Pellentesque mattis mattis risus a tincidunt.</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStatus: {
        color: 'white',
        marginTop: 12,
        fontSize: 18,
        fontWeight: 'bold'
    },
    textTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    titleBackground: {
        backgroundColor: ACTIVE_COLOR,
        padding: 50
    }
})