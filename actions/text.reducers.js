import TestActions from './text.action.types';

const textReducers = (state = {}, action) => {
    switch (action.type) {
        case TestActions.NORMAL_TEXT:
            return {
                ...state,
                textStyle: {fontWeight: 'regular'}
            };
        case TestActions.BOLD_TEXT:
            return {
                ...state,
                textStyle: {fontWeight: 'bold'}
            };
        default:
            return state;
    }
};

export default textReducers;
