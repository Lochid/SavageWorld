import { CharacterSheet } from "../types/characterSheet";

export const ADD_CHARACTER_SHEET = 'ADD_CHARACTER_SHEET';
export const EDIT_CHARACTER_SHEET = 'EDIT_CHARACTER_SHEET';
export const DELETE_CHARACTER_SHEETS = 'DELETE_CHARACTER_SHEETS';

export interface AddCharacterSheetData {
    type: 'ADD_CHARACTER_SHEET';
    characterSheet: CharacterSheet;
}

export interface EditCharacterSheetData {
    type: 'EDIT_CHARACTER_SHEET';
    characterSheet: CharacterSheet;
}

export interface DeleteCharacterSheetData {
    type: 'DELETE_CHARACTER_SHEETS';
    characterSheetIds: string[];
}

export const addCharacterSheet = (characterSheet: CharacterSheet): AddCharacterSheetData => ({
    type: ADD_CHARACTER_SHEET,
    characterSheet
});

export const editCharacterSheet = (characterSheet: CharacterSheet): EditCharacterSheetData => ({
    type: EDIT_CHARACTER_SHEET,
    characterSheet
});

export const deleteCharacterSheets = (characterSheetIds: string[]): DeleteCharacterSheetData => ({
    type: DELETE_CHARACTER_SHEETS,
    characterSheetIds
});
