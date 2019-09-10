import StylesActionTypes from '../action.types/styles.action.types';

const actionEditBackgroundColor = (newBackgroundColor) => ({
    type: StylesActionTypes.EDIT_BACKGROUND_COLOR,
    backgroundColor: !newBackgroundColor,
});

const actionEditFontWeight = (isBold) => ({
    type: StylesActionTypes.EDIT_FONT_WEIGHT,
    isBold: !isBold,
});

export {
    actionEditBackgroundColor,
    actionEditFontWeight,
}