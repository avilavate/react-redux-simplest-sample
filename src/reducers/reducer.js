import { createStore } from 'redux';

import { ACTION_TYPES } from '../actions/constants';

var defaultState = {
    data: {
        text: ''
    }
};

function upperCaseApp(state, action) {
    let newState;
    switch (action.type) {
        case ACTION_TYPES.PRE_STATE:
            return defaultState;

        case ACTION_TYPES.POST_STATE:
            console.log(state);
            newState = Object.assign({}, state);
            newState.data.text = action.text.toUpperCase()
            console.log(newState);
            return newState;

        default:
            return state;
    }
}

var store = createStore(upperCaseApp, defaultState);
export default store;