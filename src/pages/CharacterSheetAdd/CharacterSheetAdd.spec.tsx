import React from 'react';
import { shallow } from 'enzyme';
import { v4 as uuid } from 'uuid';
import CharacterSheetAdd from './CharacterSheetAdd';

jest.mock('uuid', () => ({
    v4: jest.fn(),
}));

const uuidMock = uuid as jest.Mock;
const uuidMockValue = 'uuidMockValue';

describe('CharacterSheetAdd', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        uuidMock.mockReturnValue(uuidMockValue);
    });

    it('onFinish call addCharacterSheet with new characterSheet and goBack', () => {
        const addCharacterSheet = jest.fn();
        const goBack = jest.fn();
        const values = {
            name: 'name'
        };
        const characterSheetAdd = shallow(<CharacterSheetAdd addCharacterSheet={addCharacterSheet} history={{ goBack }} templates={[]}/>);

        const onFinish = characterSheetAdd.prop('onFinish');
        onFinish(values);

        expect(addCharacterSheet).toHaveBeenCalledWith({
            ...values,
            id: uuidMockValue
        });
    });
});