import { useNavigation } from '@react-navigation/native';
import React, {useState, Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import {ACTIVE_COLOR, INACTIVE_COLOR} from '../utils/constant';

export default function NewsDetail(props) {
    const navigation = useNavigation();
    return (
        <>
            <View>
                {/* STATUS BAR */}
                <View
                    style={{flexDirection: 'row', backgroundColor: '#C14950'}}>
                    <TouchableOpacity
                        style={{margin: 15}}
                        onPress={() => navigation.navigate('News')}>
                        <Image
                            source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableOpacity>
                </View>

                {/* NEWS TITLE */}
                <View style={styles.titleBackground}>
                    <Text style={styles.textTitle}>NEWS</Text>
                </View>

                {/* DETAIL BERITA */}
                <ScrollView>
                    <View
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 15,
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../assets/images/HeaderNews.png')}
                        />
                    </View>
                    <Text
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 15,
                        }}>
                        Solo - Beredar informasi di aplikasi pesan dan media
                        sosial bahwa Kota Solo lockdown hingga sebulan ke depan.
                        Pemkot Solo menegaskan informasi tersebut adalah hoax!
                        Ketua Pelaksana Harian Gugus Tugas COVID-19 Solo,
                        Ahyani, menegaskan informasi tersebut adalah salah.
                        Pemkot Solo hanya melakukan pengetatan dan pembatasan.
                    </Text>
                    <Text style={{paddingLeft: 15, paddingRight: 15}}>
                        "Tidak ada lockdown. Kita hanya mengetatkan dan
                        membatasi saja agar tidak terjadi penularan COVID-19
                        selama libur akhir tahun," kata Ahyani saat dihubungi
                        detikcom, Sabtu (5/12/2020).{' '}
                    </Text>
                    <Text style={{paddingLeft: 15, paddingRight: 15}}>
                        Pria yang menjabat Sekretaris Daerah Kota Solo itu
                        mengatakan akses masuk dari dan ke Kota Solo tetap
                        dibuka. Namun ketika warga luar kota masuk ke Solo harus
                        dikarantina selama 14 hari.
                    </Text>
                    <Text style={{paddingLeft: 15, paddingRight: 15}}>
                        "Ini untuk mengantisipasi pemudik dan wisatawan masuk ke
                        Solo. Kita karantina dulu 14 hari untuk memastikan dia
                        tidak membawa virus," ujarnya.
                    </Text>
                    <Text style={{paddingLeft: 15, paddingRight: 15}}>
                        Sebelumnya, Wali Kota Solo FX Hadi Rudyatmo mengatakan
                        akan mengaktifkan rumah karantina di Benteng Vastenburg
                        mulai 15 Desember 2020 selama sebulan. Pihaknya mulai
                        memasang barak pada 10 Desember 2020.
                    </Text>
                    <Text style={{paddingLeft: 15, paddingRight: 15}}>
                        Rudy mengatakan akan bekerja sama dengan pengelola
                        terminal, stasiun dan bandara agar bisa melakukan
                        screening terhadap penumpang.
                    </Text>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    titleBackground: {
        backgroundColor: ACTIVE_COLOR,
        padding: 30,
    },
    textTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});
