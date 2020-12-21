import React, {useContext, useEffect, useState, useCallback} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getHealthNews} from '../api';
import {Action, Store} from '../context';
import AppLoadingScreen from './loading/AppLoadingScreen';

export default function Home() {
    const navigation = useNavigation();
    const globalState = useContext(Store.StateContext);
    const dispatch = useCallback(useContext(Store.DispatchContext), []);

    const [listArticles, setListArticles] = useState([]);

    useEffect(() => {
        Action.setLoadingPage(dispatch, true);
        const fetchHealthNewsList = () => {
            getHealthNews()
                .then((res) => {
                    setListArticles(res);
                })
                .catch((err) => {
                    console.log(
                        'Error in fetchHealthNewsList.\n',
                        err.message,
                        err.stack,
                    );
                })
                .finally(() => Action.setLoadingPage(dispatch, false));
        };
        fetchHealthNewsList();
    }, [dispatch]);

    return (
        <View style={{flex: 2}}>
            {/* SEARCH BAR */}
            <View
                style={{
                    flexDirection: 'row',
                    width: '90%',
                    margin: 10,
                    backgroundColor: '#C14950',
                    marginLeft: 17,
                    borderRadius: 10,
                }}>
                <View style={{margin: 5}}>
                    <Image source={require('../assets/icons/search.png')} />
                </View>
                <View>
                   <TextInput
                       style={styles.input}
                       placeholder="Cari gejala penyakit..."
                       //placeholderTextColor="#000"
                    //    onChangeText={this.onChangeText}
                    //    defaultValue={this.state.text}
                   />
                </View>
            </View>

            {/* ICON BAR */}
            <View style={{flex: 2}}>
                <View
                    style={[
                        {
                            flexDirection: 'row',
                            width: '90%',
                            height: 100,
                            margin: 10,
                            backgroundColor: '#C14950',
                            marginLeft: 17,
                            borderRadius: 10,
                        },
                    ]}>
                    <View
                        style={[
                            {
                                width: '20%',
                                height: 50,
                                margin: 22,
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderRadius: 10,
                            },
                        ]}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Klinik')
                            }>
                            <Image
                                source={require('../assets/icons/klinik.png')}
                            />
                        </TouchableOpacity>
                        <View
                            style={[
                                {
                                    width: '100%',
                                    height: 4,
                                    marginBottom: -20,
                                    marginTop: 10,
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                },
                            ]}>
                            <Text style={{color: 'white'}}>Klinik</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            {
                                width: '20%',
                                height: 50,
                                margin: 22,
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderRadius: 10,
                            },
                        ]}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('MedCheck')
                            }>
                            <Image
                                source={require('../assets/icons/medcheck.png')}
                            />
                        </TouchableOpacity>
                        <View
                            style={[
                                {
                                    width: '100%',
                                    height: 4,
                                    marginBottom: -20,
                                    marginTop: 10,
                                    alignItems: 'center',
                                },
                            ]}>
                            <Text style={{color: 'white'}}>MedCheck</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            {
                                width: '20%',
                                height: 50,
                                margin: 22,
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderRadius: 10,
                            },
                        ]}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('News')
                            }>
                            <Image
                                source={require('../assets/icons/news.png')}
                            />
                        </TouchableOpacity>
                        <View
                            style={[
                                {
                                    width: '100%',
                                    height: 4,
                                    marginBottom: -20,
                                    marginTop: 10,
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                },
                            ]}>
                            <Text style={{color: 'white'}}>News</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 5,
                }}>
                {/* BERITA */}
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginLeft: 20,
                        marginBottom: 5,
                    }}>
                    Berita Terbaru
                </Text>
                <ScrollView>
                    <AppLoadingScreen>
                        {listArticles.map((article, idx) => (
                            <View key={'article-' + idx} style={styles.table}>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate(
                                            'NewsDetail',
                                        )
                                    }>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            marginLeft: 50,
                                            marginTop: 20,
                                            marginRight: 10,
                                        }}>
                                        {article.title}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            marginLeft: 50,
                                            marginBottom: 20,
                                            marginRight: 10,
                                        }}>
                                        {article.description}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </AppLoadingScreen>
                </ScrollView>
            </View>
        </View>
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
});
