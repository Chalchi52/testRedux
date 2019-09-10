import AppActionTypes from '../actions/app.action.types';

const contactReducers = (state = {}, action) => {
    switch (action.type) {
        case AppActionTypes.CHANGE_BACKGROUND:
            return {
                ...state,
                color: action.color,
            };
        case AppActionTypes.CHANGE_TEXT:
            return {
                ...state,
                textStyle: action.textStyle,
            };
        default:
            return state;
    }
};

export default contactReducers;