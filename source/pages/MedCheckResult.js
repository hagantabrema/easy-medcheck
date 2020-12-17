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
                    <Text style={{ paddingLeft: 15, paddingRight:15, paddingTop: 15 }}>Flu menyerang paru-paru, hidung, dan tenggorokan. Anak-anak, orang dewasa yang lebih tua, wanita hamil, dan orang dengan penyakit kronis atau sistem kekebalan tubuh lemah berisiko tinggi.</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15 }}>Gejala-Gejala:</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15}}>Biasanya dapat didiagnosis sendiri</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15 }}>Gejalanya meliputi demam, menggigil, nyeri otot, batuk, pilek, sakit kepala, dan kelelahan</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15 }}>Pengobatan Pertama:</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15 }}>Flu diobati terutama dengan beristirahat dan cairan untuk membantu tubuh melawan infeksi. Penghilang rasa sakit anti peradagangan yang tersedia bebas dapat membantu meringankan gejala. Vaksin tahunan dapat membantu mencegah flu dan membatasi komplikasinya.</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15 }}>Disarankan:</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15 }}>Jika flu berkepanjangan segera memeriksakan diri ke penyedia perawatan primer (pcp) atau dokter umum terdekat.</Text>
                    <Text style={{ paddingLeft: 15, paddingRight:15 }}>Referensi : Informasi Medis Google.</Text>
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