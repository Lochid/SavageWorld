import {
    ADD_TEMPLATE,
    EDIT_TEMPLATE,
    DELETE_TEMPLATES,
    AddTemplateData,
    EditTemplateData,
    DeleteTemplateData
} from '../actions/index';
import { Template } from '../types/template';

export interface State {
    templateList: Template[];
}

export const initValues = {
    templateList: []
};

const templates = (
    state: State = initValues,
    action: AddTemplateData | EditTemplateData | DeleteTemplateData,
) => {
    switch (action.type) {
        case ADD_TEMPLATE:
            return {
                ...state,
                templateList: [
                    ...state.templateList,
                    action.template
                ]
            }
        case EDIT_TEMPLATE:
            return {
                ...state,
                templateList: [
                    ...state.templateList
                        .map((template) => {
                            if (template.key === action.template.key) {
                                template.name = action.template.name;
                                return {
                                    ...template,
                                    ...action.template
                                };
                            }
                            return template;
                        }),
                ]
            }
        case DELETE_TEMPLATES:
            return {
                ...state,
                templateList: [
                    ...state.templateList
                        .filter((template) => {
                            return action.templateKeys.find(key => key === template.key) === undefined;
                        }),
                ]
            }
        default:
            return state;
    }
};

export default templates;