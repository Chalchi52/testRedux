import LauncherActionTypes from "../action.types/launcher.action.types";

const launcherReducers = (state = {}, action) => {
    switch(action.type) {
        case LauncherActionTypes.UPDATE_BACKGROUND:
            return {
                ...state,
                backgroundStyle: {
                    ...state.backgroundStyle,
                    ...action.backgroundStyle
                },
            };
        case LauncherActionTypes.UPDATE_FONT:
            return {
                ...state,
                fontStyle: {
                  ...state.fontStyle,
                  ...action.fontStyle
              },
            }
        default:
            return state;
    }
};
export default launcherReducers;
