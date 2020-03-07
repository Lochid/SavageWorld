import { Template } from '../types/template';

export const ADD_TEMPLATE = 'ADD_TEMPLATE';
export const EDIT_TEMPLATE = 'EDIT_TEMPLATE';

export interface AddTemplateData {
    type: 'ADD_TEMPLATE';
    template: Template;
}

export interface EditTemplateData {
    type: 'EDIT_TEMPLATE';
    template: Template;
}

export const addTemplate = (template: Template): AddTemplateData => ({
    type: ADD_TEMPLATE,
    template
});


export const editTemplate = (template: Template): EditTemplateData => ({
    type: EDIT_TEMPLATE,
    template
});
