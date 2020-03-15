import { combineReducers } from 'redux';
import navigationBar, { State as NavigationBarState } from './navigationBar';
import templates, { State as TemplatesState } from './templates';

export interface State {
    navigationBar: NavigationBarState;
    templates: TemplatesState;
}

export default combineReducers({
    navigationBar,
    templates
});