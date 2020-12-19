import {Spinner} from 'native-base';
import React, {useContext} from 'react';
import {Store} from '../../context';

export default function AppLoadingScreen(props) {
    const isLoading = useContext(Store.StateContext).isLoading;
    if (!isLoading) {
        return props.children;
    }
    return <Spinner />;
}
