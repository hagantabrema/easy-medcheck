export const logInUser = (dispatch, authToken, user) => {
    dispatch({
        type: 'LOG_IN',
        payload: {
            authToken: authToken,
            user: user,
        },
    });
};

export const logOutUser = (dispatch) => {
    dispatch({
        type: 'LOG_OUT',
    });
};

export const setLoadingPage = (dispatch, reload) => {
    dispatch({
        type: 'SET_LOADING',
        payload: {
            reload: reload,
        },
    });
};
