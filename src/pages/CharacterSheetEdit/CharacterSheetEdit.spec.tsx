import React from 'react';
import { shallow } from 'enzyme';
import CharacterSheetEdit from './CharacterSheetEdit';

describe('CharacterSheetEdit', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('onFinish call editCharacterSheet with updated characterSheet and goBack', () => {
        const editCharacterSheet = jest.fn();
        const goBack = jest.fn();
        const characterSheet: any = {
            id: 'id'
        };
        const values = {
            name: 'name'
        };
        const characterSheetAdd = shallow(<CharacterSheetEdit characterSheet={characterSheet} editCharacterSheet={editCharacterSheet} history={{ goBack }} />);

        const onFinish = characterSheetAdd.prop('onFinish');
        onFinish(values);

        expect(editCharacterSheet).toHaveBeenCalledWith({
            ...characterSheet,
            ...values,
        });
    });
});