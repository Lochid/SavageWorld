import React from 'react';
import { shallow } from 'enzyme';
import TemplateEdit from './TemplateEdit';

describe('TemplateEdit', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('onFinish call editTemplate with updated template and goBack', () => {
        const editTemplate = jest.fn();
        const goBack = jest.fn();
        const template: any = {
            key: 'key'
        };
        const values = {
            name: 'name'
        };
        const templateAdd = shallow(<TemplateEdit template={template} editTemplate={editTemplate} history={{ goBack }} />);

        const onFinish = templateAdd.prop('onFinish');
        onFinish(values);

        expect(editTemplate).toHaveBeenCalledWith({
            ...template,
            ...values,
        });
    });
});