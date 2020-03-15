import { connect } from 'react-redux';
import { editTemplate } from '../../actions';

jest.mock('react-redux', () => ({
    connect: jest.fn()
}));

jest.mock('../../actions', () => ({
    editTemplate: jest.fn()
}));

const connectMock = connect as jest.Mock;
const editTemplateMock = editTemplate as jest.Mock;

const editTemplateMockValue = 'addTemplateMockValue';
const template = {
    key: 'key'
};
const templateList = [
    template
];

const state = {
    templates: {
        templateList
    }
}

const defaultPreprops = {
    match: {
        params: {
            key: 'key'
        }
    }
}

describe('TemplateEditContainer', () => {
    let mapStateToProps;
    let mapDispatchToProps;

    beforeAll(async () => {
        jest.resetAllMocks();

        connectMock.mockImplementation((mstp, mdtp) => {
            mapStateToProps = mstp;
            mapDispatchToProps = mdtp;
            return jest.fn();
        });

        await import('./TemplateEditContainer');
    });

    beforeEach(() => {
        jest.resetAllMocks();
        editTemplateMock.mockReturnValue(editTemplateMockValue);
    });

    it('get template from template list and put it to props', () => {
        const props = mapStateToProps(state, defaultPreprops);

        expect(props).toEqual({
            ...defaultPreprops,
            template
        });
    });

    it('call go back and return old props', () => {
        const goBack = jest.fn();
        const preprops = {
            match: {
                params: {
                    key: 'key1'
                }
            },
            history: {
                goBack
            }
        }
        const props = mapStateToProps(state, preprops);

        expect(goBack).toHaveBeenCalled();
        expect(props).toEqual(preprops);
    });

    it('put putCurrentAddress to props and call putCurrentAddress from actions', () => {
        const template = 'template';
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        props.editTemplate(template);

        expect(editTemplateMock).toHaveBeenCalledWith(template);
        expect(dispatch).toHaveBeenCalledWith(editTemplateMockValue);
    });
});