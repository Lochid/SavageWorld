import {
    ADD_TEMPLATE,
    AddTemplateData
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
    action: AddTemplateData,
) => {
    switch (action.type) {
        case ADD_TEMPLATE:
            return {
                ...state,
                templateList:[
                    ...state.templateList,
                    action.template
                ]
            }
        default:
            return state;
    }
};

export default templates;