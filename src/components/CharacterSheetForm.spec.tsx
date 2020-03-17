import React from 'react';
import { shallow } from 'enzyme';
import { Select } from 'antd';
import CharacterSheetForm from './CharacterSheetForm';

const onFinish = 'onFinish';
const initialData = 'initialData';
const template = {
    id: 'id',
    name: 'name'
};

describe('CharacterSheetForm', () => {
    it('return component with onFinish as \'onFinish\' attribute', () => {
        const templateForm = shallow(<CharacterSheetForm onFinish={onFinish as any} initialData={initialData as any} />);

        const onFinishAttr = templateForm.prop('onFinish');

        expect(onFinishAttr).toBe(onFinish);
    });

    it('return component with initialData as \'initialValues\' attribute', () => {
        const templateForm = shallow(<CharacterSheetForm onFinish={onFinish as any} initialData={initialData as any} />);

        const initialValues = templateForm.prop('initialValues');

        expect(initialValues).toBe(initialData);
    });

    it('return component with empty object as \'initialValues\' attribute if initialData is undefined', () => {
        const templateForm = shallow(<CharacterSheetForm onFinish={onFinish as any} initialData={undefined as any} />);

        const initialValues = templateForm.prop('initialValues');

        expect(initialValues).toEqual({});
    });

    it('return component with true as \'disabled\' attribute if templates is undefined', () => {
        const templateForm = shallow(<CharacterSheetForm onFinish={onFinish as any} initialData={undefined as any} />);

        const select = templateForm.find(Select);

        const disabled = select.prop('disabled');

        expect(disabled).toBeTruthy();
    });

    it('return component with false as \'disabled\' attribute if templates is not undefined', () => {
        const templateForm = shallow(<CharacterSheetForm
            onFinish={onFinish as any}
            initialData={undefined as any}
            templates={[]} />);

        const select = templateForm.find(Select);

        const disabled = select.prop('disabled');

        expect(disabled).toBeFalsy();
    });

    it('count of select options the same as templates', () => {
        const templateForm = shallow(<CharacterSheetForm
            onFinish={onFinish as any}
            initialData={undefined as any}
            templates={[template, template]} />);

        const select = templateForm.find(Select);
        const options = select.find(Select.Option);

        expect(options.length).toBe(2);
    });

    it('options has attributes id as key and value from templates', () => {
        const templateForm = shallow(<CharacterSheetForm
            onFinish={onFinish as any}
            initialData={undefined as any}
            templates={[template]} />);

        const select = templateForm.find(Select);
        const option = select.find(Select.Option);
        const { value, children } = option.props();
        const key = option.key();

        expect(key).toBe(template.id);
        expect(value).toBe(template.id);
        expect(children).toBe(template.name);
    });

    it('if template is undefined and initData is undefinaed select will be emplty', () => {
        const templateForm = shallow(<CharacterSheetForm
            onFinish={onFinish as any}
            initialData={undefined as any}
        />);

        const select = templateForm.find(Select);
        const options = select.find(Select.Option);
        expect(options.length).toBe(0);
    });

    it('if template is undefined and initData is exist template from initData will put to select', () => {
        const templateForm = shallow(<CharacterSheetForm
            onFinish={onFinish as any}
            initialData={{ template } as any}
        />);

        const select = templateForm.find(Select);
        const option = select.find(Select.Option);
        const { value, children } = option.props();
        const key = option.key();

        expect(key).toBe(template.id);
        expect(value).toBe(template.id);
        expect(children).toBe(template.name);
    });
});