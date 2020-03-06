import { Template } from '../types/template';

export interface State {
    templateList: Template[];
}

const initValues = {
    templateList: []
};

const templates = (
    state: State = initValues,
    action: { type: string },
) => {
    switch (action.type) {
        default:
            return state
    }
};

export default templates;