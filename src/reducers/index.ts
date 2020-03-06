import { combineReducers } from 'redux';
import navigationBar, { State as NavigationBarState } from './navigationBar';

export interface State {
    navigationBar: NavigationBarState
}

export default combineReducers({
    navigationBar
});