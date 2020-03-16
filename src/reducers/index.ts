import { combineReducers } from 'redux';
import navigationBar, { State as NavigationBarState } from './navigationBar';
import templates, { State as TemplatesState } from './templates';
import characterSheets, { State as CharacterSheetsState } from './characterSheets';

export interface State {
    navigationBar: NavigationBarState;
    templates: TemplatesState;
    characterSheets: CharacterSheetsState;
}

export default combineReducers({
    navigationBar,
    templates,
    characterSheets
});