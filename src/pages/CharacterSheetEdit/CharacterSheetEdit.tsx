import React from 'react';
import CharacterSheetForm from '../../components/CharacterSheetForm';
import { CharacterSheet } from '../../types/characterSheet';

export interface CharacterSheetEditProps {
  characterSheet: CharacterSheet;
  editCharacterSheet: (characterSheet: CharacterSheet) => void;
  history: {
    goBack: () => void;
  }
}

const CharacterSheetEdit = ({
  characterSheet,
  editCharacterSheet,
  history: {
    goBack
  }
}: CharacterSheetEditProps) => {
  return (
    <CharacterSheetForm
      initialData={characterSheet}
      onFinish={(values) => {
        const temp = values as CharacterSheet;
        editCharacterSheet({
          ...characterSheet,
          ...temp
        });
        goBack();
      }}
    />
  );
}
export default CharacterSheetEdit;