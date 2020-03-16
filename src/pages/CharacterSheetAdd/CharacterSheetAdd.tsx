import React from 'react';
import { v4 as uuid } from 'uuid';
import CharacterSheetForm from '../../components/CharacterSheetForm';
import { CharacterSheet } from '../../types/characterSheet';
import { Template } from '../../types/template';

export interface CharacterSheetAddProps {
  templates: Template[];
  addCharacterSheet: (characterSheet: CharacterSheet) => void;
  history: {
    goBack: () => void;
  }
}

const CharacterSheetAdd = ({
  templates,
  addCharacterSheet,
  history: {
    goBack
  }
}: CharacterSheetAddProps) => {
  return (
    <CharacterSheetForm
      onFinish={(values) => {
        const characterSheet = values as Partial<CharacterSheet>;
        addCharacterSheet({
          ...characterSheet,
          id: uuid()
        } as CharacterSheet);
        goBack();
      }}
      templates={templates}
    />
  );
}
export default CharacterSheetAdd;