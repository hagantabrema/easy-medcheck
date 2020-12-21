import React, {useState, Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
} from 'react-native';
import {ACTIVE_COLOR, INACTIVE_COLOR} from '../utils/constant';
import {createStackNavigator} from '@react-navigation/stack';
import {getHealthNews} from '../api';
import {
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function News(prop) {
    const navigation = useNavigation();
    return (
        <>
            <View>
                {/* STATUS BAR */}
                <View
                    style={{flexDirection: 'row', backgroundColor: '#C14950'}}>
                    <TouchableOpacity
                        style={{margin: 15}}
                        onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={require('../assets/icons/backArrow.png')}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textStatus}>Berita</Text>
                    </View>
                </View>

                {/* BERITA */}
                <ScrollView>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.table}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('NewsDetail')
                            }>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 50,
                                    marginTop: 20,
                                    marginRight: 10,
                                }}>
                                News
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 50,
                                    marginBottom: 20,
                                    marginRight: 10,
                                }}>
                                Info Solo Lockdown Sampai Januari: Hoax!{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 5,
    },
    table: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    textStatus: {
        color: 'white',
        marginTop: 12,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
