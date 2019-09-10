import BackgroundActions from './background.action.types';

const actionMakeBackgroundWhite = () => ({
    type: BackgroundActions.WHITE_BACKGROUND,
    color: '#FFFFFF',
});

const actionMakeBackgroundBlack = () => ({
    type: BackgroundActions.BLACK_BACKGROUND,
    color: '#000000',
});



export {
    actionMakeBackgroundWhite,
    actionMakeBackgroundBlack,
};
