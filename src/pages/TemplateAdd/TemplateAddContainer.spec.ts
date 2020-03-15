import { connect } from 'react-redux';
import { addTemplate } from '../../actions';

jest.mock('react-redux', () => ({
    connect: jest.fn()
}));

jest.mock('../../actions', () => ({
    addTemplate: jest.fn()
}));

const connectMock = connect as jest.Mock;
const addTemplateMock = addTemplate as jest.Mock;

const addTemplateMockValue = 'addTemplateMockValue';

describe('TemplateAddContainer', () => {
    let mapStateToProps;
    let mapDispatchToProps;

    beforeAll(async () => {
        jest.resetAllMocks();

        connectMock.mockImplementation((mstp, mdtp) => {
            mapStateToProps = mstp;
            mapDispatchToProps = mdtp;
            return jest.fn();
        });

        await import('./TemplateAddContainer');
    });

    beforeEach(() => {
        jest.resetAllMocks();
        addTemplateMock.mockReturnValue(addTemplateMockValue);
    });

    it('return old props', () => {
        const preprops = {
            preprops: 'preprops'
        };
        const props = mapStateToProps({}, preprops);

        expect(props).toEqual(preprops);
    });

    it('put putCurrentAddress to props and call putCurrentAddress from actions', () => {
        const template = 'template';
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        
        props.addTemplate(template);

        expect(addTemplateMock).toHaveBeenCalledWith(template);
        expect(dispatch).toHaveBeenCalledWith(addTemplateMockValue);
    });
});