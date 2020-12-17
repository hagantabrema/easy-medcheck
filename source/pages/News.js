import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, onPress } from 'react-native'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'News',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: 'News',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
        title: 'News',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571d76',
        title: 'News',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145e29d79',
        title: 'News',
    },
];

const Item = ({ title }) => (
    <View>
        <View >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsDetail')}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const News = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 40,
        marginLeft: 50, marginTop: 20,
    },
});

export default News;
