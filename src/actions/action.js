import { ACTION_TYPES } from './constants';

export var preState = () => {
    return {
        type: ACTION_TYPES.PRE_STATE,
        text: ''
    };
}

export var postState = (text) => {
    return {
        type: ACTION_TYPES.POST_STATE,
        text
    }
}


