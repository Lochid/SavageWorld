import React from 'react';
import TemplateForm from './TemplateForm';
import { shallow } from 'enzyme';

const onFinish = 'onFinish';
const initialData = 'initialData';

describe('TemplateForm', () => {
    it('return component with onFinish as \'onFinish\' attribute', () => {
        const templateForm = shallow(<TemplateForm onFinish={onFinish as any} initialData={initialData as any} />);

        const onFinishAttr = templateForm.prop('onFinish');

        expect(onFinishAttr).toBe(onFinish);
    });
    it('return component with initialData as \'initialValues\' attribute', () => {
        const templateForm = shallow(<TemplateForm onFinish={onFinish as any} initialData={initialData as any} />);

        const initialValues = templateForm.prop('initialValues');

        expect(initialValues).toBe(initialData);
    });
    it('return component with empty object as \'initialValues\' attribute if initialData is undefined', () => {
        const templateForm = shallow(<TemplateForm onFinish={onFinish as any} initialData={undefined as any} />);

        const initialValues = templateForm.prop('initialValues');

        expect(initialValues).toEqual({});
    });
});