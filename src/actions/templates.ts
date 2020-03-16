import { Template } from '../types/template';

export const ADD_TEMPLATE = 'ADD_TEMPLATE';
export const EDIT_TEMPLATE = 'EDIT_TEMPLATE';
export const DELETE_TEMPLATES = 'DELETE_TEMPLATES';

export interface AddTemplateData {
    type: 'ADD_TEMPLATE';
    template: Template;
}

export interface EditTemplateData {
    type: 'EDIT_TEMPLATE';
    template: Template;
}

export interface DeleteTemplateData {
    type: 'DELETE_TEMPLATES';
    templateIds: string[];
}

export const addTemplate = (template: Template): AddTemplateData => ({
    type: ADD_TEMPLATE,
    template
});

export const editTemplate = (template: Template): EditTemplateData => ({
    type: EDIT_TEMPLATE,
    template
});

export const deleteTemplates = (templateIds: string[]): DeleteTemplateData => ({
    type: DELETE_TEMPLATES,
    templateIds
});
