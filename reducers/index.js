import { combineReducers } from 'redux';
import TextReducers from '../actions/text.reducers';
import BackgroundReducers from '../actions/background.reducers';

export default combineReducers({
    TextReducers,
    BackgroundReducers,
});
