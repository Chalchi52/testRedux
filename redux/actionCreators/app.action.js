import AppActionTypes from '../actions/app.action.types';

const actionChangeBackgroundColor = (color) => ({
    type: AppActionTypes.CHANGE_BACKGROUND,
    color,
});

const actionChangeText = (textStyle) => ({
    type: AppActionTypes.CHANGE_TEXT,
    textStyle,
});

export {
    actionChangeBackgroundColor,
    actionChangeText,
};
