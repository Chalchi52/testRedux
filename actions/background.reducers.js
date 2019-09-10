import BackgroundActions from './background.action.types';

const backgroundReducers = (state = {}, action) => {
    switch (action.type) {
        case BackgroundActions.WHITE_BACKGROUND:
            return {
                ...state,
                backgroundStyle: {backgroundColor: action.color},
            };
        case BackgroundActions.BLACK_BACKGROUND:
            return {
                ...state,
                backgroundStyle: {backgroundColor: action.color},
            };
        default:
            return state;
    }
};

export default backgroundReducers;
