import characterSheets, { initValues } from './characterSheets';
import { ADD_CHARACTER_SHEET, EDIT_CHARACTER_SHEET, DELETE_CHARACTER_SHEETS } from '../actions';

const characterSheet = {
    id: 'id',
    name: 'characterSheet',
    templateId: 'templateId'
};

const state = {
    characterSheetList: [
        characterSheet
    ]
};

describe('characterSheets', () => {
    it('return initValues if state is empty', () => {
        const result = characterSheets(undefined, {} as any);

        expect(result).toBe(initValues);
    });
    it('return state if type is unknown', () => {
        const result = characterSheets(state, {} as any);

        expect(result).toBe(state);
    });
    it('return state with new character sheet if type is ADD_CHARACTER_SHEET', () => {
        const result = characterSheets(state, {
            type: ADD_CHARACTER_SHEET,
            characterSheet
        });

        expect(result).toEqual({
            ...initValues,
            characterSheetList: [
                characterSheet,
                characterSheet
            ]
        });
    });
    it('return state with updated character sheet if type is EDIT_CHARACTER_SHEET and character sheet exist', () => {
        const characterSheetName = 'characterSheetName';
        const result = characterSheets(state, {
            type: EDIT_CHARACTER_SHEET,
            characterSheet: {
                ...characterSheet,
                name: characterSheetName
            }
        });

        expect(result).toEqual({
            characterSheetList: [
                {
                    ...characterSheet,
                    name: characterSheetName
                }
            ]
        });
    });
    it('return state with unupdated character sheet if type is EDIT_CHARACTER_SHEET and character sheet has wrong id', () => {
        const result = characterSheets(state, {
            type: EDIT_CHARACTER_SHEET,
            characterSheet: {
                id: 'otherId',
                name: 'characterSheetName',
                templateId: 'templateId'
            }
        });

        expect(result).toEqual({
            characterSheetList: [
                characterSheet,
            ]
        });
    });
    it('return state without character sheet which was deleted if type is DELETE_CHARACTER_SHEETS and id exist', () => {
        const result = characterSheets(state, {
            type: DELETE_CHARACTER_SHEETS,
            characterSheetIds: [characterSheet.id]
        });

        expect(result).toEqual({
            characterSheetList: []
        });
    });
    it('return state with all character sheets if type is DELETE_CHARACTER_SHEETS and character sheets with id is not exist', () => {
        const result = characterSheets(state, {
            type: DELETE_CHARACTER_SHEETS,
            characterSheetIds: ['otherId']
        });

        expect(result).toEqual({
            characterSheetList: [
                characterSheet,
            ]
        });
    });
});