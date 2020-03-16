import templates, { initValues } from './templates';
import { ADD_TEMPLATE, EDIT_TEMPLATE, DELETE_TEMPLATES } from '../actions';

const template = {
    id: 'id',
    name: 'template'
};

const state = {
    templateList: [
        template
    ]
};

describe('templates', () => {
    it('return initValues if state is empty', () => {
        const result = templates(undefined, {} as any);

        expect(result).toBe(initValues);
    });
    it('return state if type is unknown', () => {
        const result = templates(state, {} as any);

        expect(result).toBe(state);
    });
    it('return state with new template if type is ADD_TEMPLATE', () => {
        const result = templates(state, {
            type: ADD_TEMPLATE,
            template: template
        });

        expect(result).toEqual({
            ...initValues,
            templateList: [
                template,
                template
            ]
        });
    });
    it('return state with updated template if type is EDIT_TEMPLATE and template exist', () => {
        const templateName = 'templateName';
        const result = templates(state, {
            type: EDIT_TEMPLATE,
            template: {
                ...template,
                name: templateName
            }
        });

        expect(result).toEqual({
            templateList: [
                {
                    ...template,
                    name: templateName
                }
            ]
        });
    });
    it('return state with unupdated template if type is EDIT_TEMPLATE and template has wrong id', () => {
        const result = templates(state, {
            type: EDIT_TEMPLATE,
            template: {
                id: 'otherId',
                name: 'templateName'
            }
        });

        expect(result).toEqual({
            templateList: [
                template,
            ]
        });
    });
    it('return state without template which was deleted if type is DELETE_TEMPLATES and id exist', () => {
        const result = templates(state, {
            type: DELETE_TEMPLATES,
            templateIds: [template.id]
        });

        expect(result).toEqual({
            templateList: []
        });
    });
    it('return state with all templates if type is DELETE_TEMPLATES and templates with id is not exist', () => {
        const result = templates(state, {
            type: DELETE_TEMPLATES,
            templateIds: ['otherId']
        });

        expect(result).toEqual({
            templateList: [
                template,
            ]
        });
    });
});