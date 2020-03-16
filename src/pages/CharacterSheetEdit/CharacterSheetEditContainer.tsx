import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import CharacterSheetEdit from './CharacterSheetEdit';
import { State } from '../../reducers';
import { editCharacterSheet, EditCharacterSheetData } from '../../actions';
import { CharacterSheet } from '../../types/characterSheet';

export interface OwnProps {
    match: {
        params: {
            id: string;
        }
    };
    history: {
        goBack: () => void;
    }
}

const mapStateToProps = ({
    templates: { templateList },
    characterSheets: { characterSheetList }
}: State, props: OwnProps) => {
    const characterSheet = characterSheetList
        .find(temp => temp.id === props.match.params.id);
    if (characterSheet === undefined) {
        props.history.goBack();
        return props;
    }
    return {
        ...props,
        characterSheet: {
            ...characterSheet,
            template: templateList
                .find(({ id }) => id === characterSheet.templateId)
        }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<EditCharacterSheetData>) => ({
    editCharacterSheet: (characterSheet: CharacterSheet) => dispatch(editCharacterSheet(characterSheet))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheetEdit);