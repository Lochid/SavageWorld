import { CharacterSheet } from '../types/characterSheet';
import { DeleteCharacterSheetData, DELETE_CHARACTER_SHEETS } from '../actions';

export interface State {
    characterSheetList: CharacterSheet[];
}

export const initValues = {
    characterSheetList: []
};

const characterSheets = (
    state: State = initValues,
    action: DeleteCharacterSheetData,
) => {
    switch (action.type) {
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