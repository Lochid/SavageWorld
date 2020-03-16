export const DELETE_CHARACTER_SHEETS = 'DELETE_CHARACTER_SHEETS';

export interface DeleteCharacterSheetData {
    type: 'DELETE_CHARACTER_SHEETS';
    characterSheetIds: string[];
}

export const deleteCharacterSheets = (characterSheetIds: string[]): DeleteCharacterSheetData => ({
    type: DELETE_CHARACTER_SHEETS,
    characterSheetIds
});
