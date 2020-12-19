import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Store} from './source/context';
import Router from './source/router/router';

const App = () => {
    return (
        <NavigationContainer>
            <Store.StateProvider>
                <Router />
            </Store.StateProvider>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({});
