import { CharacterSheet } from '../types/characterSheet';
import {
    ADD_CHARACTER_SHEET,
    EDIT_CHARACTER_SHEET,
    DELETE_CHARACTER_SHEETS,
    AddCharacterSheetData,
    EditCharacterSheetData,
    DeleteCharacterSheetData
} from '../actions';

export interface State {
    characterSheetList: CharacterSheet[];
}

export const initValues = {
    characterSheetList: []
};

const characterSheets = (
    state: State = initValues,
    action: AddCharacterSheetData | EditCharacterSheetData | DeleteCharacterSheetData,
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
        case EDIT_CHARACTER_SHEET:
            return {
                ...state,
                characterSheetList: [
                    ...state.characterSheetList
                        .map((characterSheet) => {
                            if (characterSheet.id === action.characterSheet.id) {
                                characterSheet.name = action.characterSheet.name;
                                return {
                                    ...characterSheet,
                                    ...action.characterSheet
                                };
                            }
                            return characterSheet;
                        }),
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