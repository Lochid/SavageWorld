import React from 'react';
import { shallow } from 'enzyme';
import Table from 'antd/lib/table/Table';
import TemplateList from './TemplateList';

const deleteButtonNumber = 1;
describe('TemplateList', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('onClick on delete button call deleteTemplates from props with templateKeys', () => {
        const deleteTemplates = jest.fn();

        const templateAdd = shallow(<TemplateList templateList={[]} deleteTemplates={deleteTemplates} />);

        const props = templateAdd.props();
        const children = props.children;
        const buttons = children;
        const onClick: any = buttons[deleteButtonNumber].props.onClick;

        onClick();

        expect(deleteTemplates).toHaveBeenCalledWith([]);
    });

    it('onChange on table select put selected items to templateKeys', () => {
        const templateKeys = ['key1', 'key2'];

        const templateAdd = shallow(<TemplateList templateList={[]} deleteTemplates={jest.fn()} />);

        const table = templateAdd.find(Table);
        const rowSelection: any = table.prop('rowSelection');
        const onChange = rowSelection.onChange;

        onChange(templateKeys);

        const state = templateAdd.state();
        expect(state).toEqual({
            templateKeys
        });
    });

    it('return templateList as dataSource on table', () => {
        const templateList: any = ['key1', 'key2'];

        const templateAdd = shallow(<TemplateList templateList={templateList} deleteTemplates={jest.fn()} />);

        const table = templateAdd.find(Table);
        const dataSource: any = table.prop('dataSource');

        expect(dataSource).toEqual(templateList);
    });

    it('return templateList as dataSource on table', () => {
        const name = 'name';
        const key = 'key';

        const templateAdd = shallow(<TemplateList templateList={[]} deleteTemplates={jest.fn()} />);

        const table = templateAdd.find(Table);
        const columns: any = table.prop('columns');
        const render = columns[0].render;
        const result = render(name, {key});

        expect(result.props.url).toEqual(`/templates/edit/${key}`);
        expect(result.props.name).toEqual(name);
    });
});