import { CharacterSheet } from '../types/characterSheet';
import {
    DELETE_CHARACTER_SHEETS,
    ADD_CHARACTER_SHEET,
    DeleteCharacterSheetData,
    AddCharacterSheetData
} from '../actions';

export interface State {
    characterSheetList: CharacterSheet[];
}

export const initValues = {
    characterSheetList: []
};

const characterSheets = (
    state: State = initValues,
    action: AddCharacterSheetData | DeleteCharacterSheetData,
): State => {
    switch (action.type) {
        case ADD_CHARACTER_SHEET:
            return {
                ...state,
                characterSheetList: [
                    ...state.characterSheetList,
                    action.characterSheet
                ]
            }
        case DELETE_CHARACTER_SHEETS:
            return {
                ...state,
                characterSheetList: [
                    ...state.characterSheetList
                        .filter((characterSheet) => {
                            return action.characterSheetIds.find(id => id === characterSheet.id) === undefined;
                        }),
                ]
            }
        default:
            return state;
    }
};

export default characterSheets;