// contact.actions.js
import TestActions from './text.action.types';

const actionMakeBoldText = () => ({
    type: TestActions.BOLD_TEXT,
});

const actionMakeNormalText = () => ({
    type: TestActions.NORMAL_TEXT,
});



export {
    actionMakeBoldText,
    actionMakeNormalText,
};
