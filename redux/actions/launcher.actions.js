import LauncherActionTypes from "../action.types/launcher.action.types";

const actionUpdateBackground = () => ({
    type: LauncherActionTypes.UPDATE_BACKGROUND,
    backgroundStyle: {
        backgroundColor: '#09AEC6',
    }
});

const actionUpdateFont = () => ({
    type: LauncherActionTypes.UPDATE_FONT,
    fontStyle: {
        fontWeight: 'bold',
    }
});

export {
    actionUpdateBackground,
    actionUpdateFont,
}
