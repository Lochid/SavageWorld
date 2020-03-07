import {
    ADD_TEMPLATE,
    EDIT_TEMPLATE,
    AddTemplateData,
    EditTemplateData
} from '../actions/index';
import { Template } from '../types/template';

export interface State {
    templateList: Template[];
}

const initValues = {
    templateList: []
};

const templates = (
    state: State = initValues,
    action: AddTemplateData | EditTemplateData,
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
        default:
            return state;
    }
};

export default templates;