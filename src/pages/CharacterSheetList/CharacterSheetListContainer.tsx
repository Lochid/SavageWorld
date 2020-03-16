import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import CharacterSheetList from './CharacterSheetList';
import { DeleteCharacterSheetData, deleteCharacterSheets } from '../../actions';
import { State } from '../../reducers';

export interface OwnProps {
}

const mapStateToProps = (state: State, props: OwnProps) => {
    const characterSheetList = state.characterSheets.characterSheetList
        .map(characterSheet => ({
            ...characterSheet,
            template: state.templates.templateList
                .find(({ id }) => id === characterSheet.templateId)
        }));
    return {
        ...props,
        characterSheetList,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<DeleteCharacterSheetData>) => ({
    deleteCharacterSheets: (characterSheetIds: string[]) => dispatch(deleteCharacterSheets(characterSheetIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheetList);