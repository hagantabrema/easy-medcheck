import {AxiosInstance} from 'axios';
import React, {createContext, useReducer} from 'react';

export type ActionProps =
    | {type: 'LOG_IN', payload: {user: UserDataProps, authToken: string}}
    | {type: 'LOG_OUT'}
    | {type: 'AXIOS_BE_INSTANCE', payload: {axios: AxiosInstance}}
    | {type: 'SET_LOADING', payload: {reload: boolean}};

const initialState = {
    authToken: null,
    user: null,
    axios: null,
    isLoading: false,
};

const StateContext = createContext(initialState);
const DispatchContext = createContext({});

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, isLoading: action.payload.reload};
        default:
            return {...state};
    }
}

export {StateProvider, StateContext, DispatchContext};
