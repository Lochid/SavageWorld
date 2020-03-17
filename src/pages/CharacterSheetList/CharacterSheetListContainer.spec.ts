import { connect } from 'react-redux';
import { deleteCharacterSheets } from '../../actions';

jest.mock('react-redux', () => ({
    connect: jest.fn()
}));

jest.mock('../../actions', () => ({
    deleteCharacterSheets: jest.fn()
}));

const connectMock = connect as jest.Mock;
const deleteCharacterSheetsMock = deleteCharacterSheets as jest.Mock;

const deleteCharacterSheetsMockValue = 'deleteCharacterSheetsMockValue';
const characterSheet = {
    id: 'id'
};
const characterSheetList = [
    characterSheet
];
const template = {
    id: 'template'
};
const templateList = [
    template
];

const state = {
    characterSheets: {
        characterSheetList
    },
    templates: {
        templateList
    }
}

const defaultPreprops = {
    defaultPreprops: 'defaultPreprops'
}

describe('CharacterSheetListContainer', () => {
    let mapStateToProps: any;
    let mapDispatchToProps: any;

    beforeAll(async () => {
        jest.resetAllMocks();

        connectMock.mockImplementation((mstp, mdtp) => {
            mapStateToProps = mstp;
            mapDispatchToProps = mdtp;
            return jest.fn();
        });

        await import('./CharacterSheetListContainer');
    });

    beforeEach(() => {
        jest.resetAllMocks();
        deleteCharacterSheetsMock.mockReturnValue(deleteCharacterSheetsMockValue);
    });

    it('get characterSheet list from state and put it to props', () => {
        const props = mapStateToProps(state, defaultPreprops);

        expect(props).toEqual({
            ...defaultPreprops,
            characterSheetList
        });
    });

    it('get template from template list and put it into character sheet', () => {
        const props = mapStateToProps({
            ...state,
            characterSheets: {
                ...state.characterSheets,
                characterSheetList: [
                    {
                        ...characterSheet,
                        templateId: 'template'
                    }
                ]
            }
        }, defaultPreprops);

        expect(props).toEqual({
            ...defaultPreprops,
            characterSheetList: [{
                ...characterSheet,
                templateId: 'template',
                template
            }]
        });
    });

    it('put deleteCharacterSheets to props and call deleteCharacterSheets from actions', () => {
        const characterSheetIds =['characterSheet'];
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        props.deleteCharacterSheets(characterSheetIds);

        expect(deleteCharacterSheetsMock).toHaveBeenCalledWith(characterSheetIds);
        expect(dispatch).toHaveBeenCalledWith(deleteCharacterSheetsMockValue);
    });
});