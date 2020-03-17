import { connect } from 'react-redux';
import { editCharacterSheet } from '../../actions';

jest.mock('react-redux', () => ({
    connect: jest.fn()
}));

jest.mock('../../actions', () => ({
    editCharacterSheet: jest.fn()
}));

const connectMock = connect as jest.Mock;
const editCharacterSheetMock = editCharacterSheet as jest.Mock;

const editCharacterSheetMockValue = 'editCharacterSheetMockValue';
const characterSheet = {
    id: 'id',
    templateId: 'templateId',
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
    match: {
        params: {
            id: 'id'
        }
    }
}

describe('CharacterSheetEditContainer', () => {
    let mapStateToProps: any;
    let mapDispatchToProps: any;

    beforeAll(async () => {
        jest.resetAllMocks();

        connectMock.mockImplementation((mstp, mdtp) => {
            mapStateToProps = mstp;
            mapDispatchToProps = mdtp;
            return jest.fn();
        });

        await import('./CharacterSheetEditContainer');
    });

    beforeEach(() => {
        jest.resetAllMocks();
        editCharacterSheetMock.mockReturnValue(editCharacterSheetMockValue);
    });

    it('get characterSheet from characterSheet list and put it into props', () => {
        const props = mapStateToProps(state, defaultPreprops);

        expect(props).toEqual({
            ...defaultPreprops,
            characterSheet
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
            characterSheet: {
                ...characterSheet,
                templateId: 'template',
                template
            }
        });
    });

    it('call go back and return old props', () => {
        const goBack = jest.fn();
        const preprops = {
            match: {
                params: {
                    id: 'id1'
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

    it('put editCharacterSheet to props and call editCharacterSheet from actions', () => {
        const characterSheet = 'characterSheet';
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        props.editCharacterSheet(characterSheet);

        expect(editCharacterSheetMock).toHaveBeenCalledWith(characterSheet);
        expect(dispatch).toHaveBeenCalledWith(editCharacterSheetMockValue);
    });
});