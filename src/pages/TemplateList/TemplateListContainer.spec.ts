import { connect } from 'react-redux';
import { deleteTemplates } from '../../actions';

jest.mock('react-redux', () => ({
    connect: jest.fn()
}));

jest.mock('../../actions', () => ({
    deleteTemplates: jest.fn()
}));

const connectMock = connect as jest.Mock;
const deleteTemplatesMock = deleteTemplates as jest.Mock;

const deleteTemplatesMockValue = 'deleteTemplatesMockValue';
const template = {
    id: 'id'
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
    defaultPreprops: 'defaultPreprops'
}

describe('TemplateListContainer', () => {
    let mapStateToProps;
    let mapDispatchToProps;

    beforeAll(async () => {
        jest.resetAllMocks();

        connectMock.mockImplementation((mstp, mdtp) => {
            mapStateToProps = mstp;
            mapDispatchToProps = mdtp;
            return jest.fn();
        });

        await import('./TemplateListContainer');
    });

    beforeEach(() => {
        jest.resetAllMocks();
        deleteTemplatesMock.mockReturnValue(deleteTemplatesMockValue);
    });

    it('get template list from state and put it to props', () => {
        const props = mapStateToProps(state, defaultPreprops);

        expect(props).toEqual({
            ...defaultPreprops,
            templateList
        });
    });

    it('put deleteTemplates to props and call deleteTemplates from actions', () => {
        const templateIds =['template'];
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        props.deleteTemplates(templateIds);

        expect(deleteTemplatesMock).toHaveBeenCalledWith(templateIds);
        expect(dispatch).toHaveBeenCalledWith(deleteTemplatesMockValue);
    });
});