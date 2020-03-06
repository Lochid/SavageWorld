import { Template } from '../types/template';

export const ADD_TEMPLATE = 'ADD_TEMPLATE';

export interface AddTemplateData {
    type: 'ADD_TEMPLATE';
    template: Template;
}

export const addTemplate = (template: Template): AddTemplateData => ({
    type: ADD_TEMPLATE,
    template
});
