import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../utils/constant'

const NewsDetail = () => {
    return (
        <View>
            {/* NEWS TITLE */}
            <View style={styles.titleBackground}>
                <Text style={styles.textTitle}>NEWS</Text>
            </View>

            {/* DESKRIPSI PENYAKIT */}
            <ScrollView>
                <Text style={{ padding: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus posuere magna, eget tincidunt odio imperdiet nec. Nam ultricies, lacus at blandit porta, augue sapien fermentum felis, eu vehicula diam arcu nec dui. Ut nec nisi vel nulla tincidunt dapibus et et tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla blandit pharetra blandit. Morbi diam velit, volutpat eu dui id, malesuada dictum tellus. Pellentesque nisi quam, vulputate nec sagittis vitae, lacinia quis risus. Donec feugiat accumsan nunc at accumsan. Suspendisse pharetra elit eget consectetur porttitor. Duis tincidunt consectetur elit, a pharetra enim fermentum in. Mauris dictum eleifend sapien id varius. Ut sagittis ipsum venenatis nulla varius semper. Maecenas iaculis scelerisque nisi, ut pulvinar sem dapibus eget. Phasellus laoreet tellus est, vel viverra nibh consectetur et. Pellentesque mattis mattis risus a tincidunt.</Text>
            </ScrollView>
        </View>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    titleBackground: {
        backgroundColor: ACTIVE_COLOR,
        padding: 30
    }
})
