import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import CharacterSheetAdd from './CharacterSheetAdd';
import { State } from '../../reducers';
import { addCharacterSheet, AddCharacterSheetData } from '../../actions';
import { CharacterSheet } from '../../types/characterSheet';

export interface OwnProps {
}

const mapStateToProps = (state: State, props: OwnProps) => {
    return {
        ...props,
        templates: state.templates.templateList
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AddCharacterSheetData>) => ({
    addCharacterSheet: (characterSheet: CharacterSheet) => dispatch(addCharacterSheet(characterSheet))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheetAdd);