import React from 'react';
import { shallow } from 'enzyme';
import { v4 as uuid } from 'uuid';
import TemplateAdd from './TemplateAdd';

jest.mock('uuid', () => ({
    v4: jest.fn(),
}));

const uuidMock = uuid as jest.Mock;
const uuidMockValue = 'uuidMockValue';

describe('TemplateAdd', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        uuidMock.mockReturnValue(uuidMockValue);
    });

    it('onFinish call addTemplate with new template and goBack', () => {
        const addTemplate = jest.fn();
        const goBack = jest.fn();
        const values = {
            name: 'name'
        };
        const templateAdd = shallow(<TemplateAdd addTemplate={addTemplate} history={{ goBack }} />);

        const onFinish = templateAdd.prop('onFinish');
        onFinish(values);

        expect(addTemplate).toHaveBeenCalledWith({
            ...values,
            key: uuidMockValue
        });
    });
});