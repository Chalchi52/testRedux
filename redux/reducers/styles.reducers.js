import StylesActionTypes from '../action.types/styles.action.types';

const stylesReducers = (state = {}, action) => {
    switch (action.type) {
        case StylesActionTypes.EDIT_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.backgroundColor,
            };
        case StylesActionTypes.EDIT_FONT_WEIGHT:
            return {
                ...state,
                isBold: action.isBold,
            };
        default:
            return state;
    }
};

export default stylesReducers;