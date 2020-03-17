import { connect } from 'react-redux';
import { addCharacterSheet } from '../../actions';

jest.mock('react-redux', () => ({
    connect: jest.fn()
}));

jest.mock('../../actions', () => ({
    addCharacterSheet: jest.fn()
}));

const connectMock = connect as jest.Mock;
const addCharacterSheetMock = addCharacterSheet as jest.Mock;

const addCharacterSheetMockValue = 'addCharacterSheetMockValue';

describe('CharacterSheetAddContainer', () => {
    let mapStateToProps: any;
    let mapDispatchToProps: any;

    beforeAll(async () => {
        jest.resetAllMocks();

        connectMock.mockImplementation((mstp, mdtp) => {
            mapStateToProps = mstp;
            mapDispatchToProps = mdtp;
            return jest.fn();
        });

        await import('./CharacterSheetAddContainer');
    });

    beforeEach(() => {
        jest.resetAllMocks();
        addCharacterSheetMock.mockReturnValue(addCharacterSheetMockValue);
    });

    it('return props with templateList', () => {
        const preprops = {
            preprops: 'preprops'
        };
        const template = {
            id: 'id',
            name: 'name'
        };

        const props = mapStateToProps({
            templates: {
                templateList: [template]

            }
        }, preprops);

        expect(props).toEqual({
            ...preprops,
            templates: [template]
        });
    });

    it('put addCharacterSheetMock to props and call addCharacterSheetMock from actions', () => {
        const characterSheet = 'characterSheet';
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        props.addCharacterSheet(characterSheet);

        expect(addCharacterSheetMock).toHaveBeenCalledWith(characterSheet);
        expect(dispatch).toHaveBeenCalledWith(addCharacterSheetMockValue);
    });
});