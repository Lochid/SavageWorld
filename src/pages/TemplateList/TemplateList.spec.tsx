import React from 'react';
import { shallow } from 'enzyme';
import Table from 'antd/lib/table/Table';
import TemplateList from './TemplateList';

const deleteButtonNumber = 1;
describe('TemplateList', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('onClick on delete button call deleteTemplates from props with templateIds', () => {
        const deleteTemplates = jest.fn();

        const templateAdd = shallow(<TemplateList templateList={[]} deleteTemplates={deleteTemplates} />);

        const props = templateAdd.props();
        const children = props.children;
        const buttons = children;
        const onClick: any = buttons[deleteButtonNumber].props.onClick;

        onClick();

        expect(deleteTemplates).toHaveBeenCalledWith([]);
    });

    it('onChange on table select put selected items to templateIds', () => {
        const templateIds = ['id1', 'id2'];

        const templateAdd = shallow(<TemplateList templateList={[]} deleteTemplates={jest.fn()} />);

        const table = templateAdd.find(Table);
        const rowSelection: any = table.prop('rowSelection');
        const onChange = rowSelection.onChange;

        onChange(templateIds);

        const state = templateAdd.state();
        expect(state).toEqual({
            templateIds
        });
    });

    it('return templateList as dataSource on table', () => {
        const templateList: any = [{ id: 'id1' }, { id: 'id2' }];

        const templateAdd = shallow(<TemplateList templateList={templateList} deleteTemplates={jest.fn()} />);

        const table = templateAdd.find(Table);
        const dataSource: any = table.prop('dataSource');

        expect(dataSource).toEqual(templateList.map((template: any) => ({
            ...template,
            key: template.id
        })));
    });

    it('return template name component as column', () => {
        const name = 'name';
        const id = 'id';

        const templateAdd = shallow(<TemplateList templateList={[]} deleteTemplates={jest.fn()} />);

        const table = templateAdd.find(Table);
        const columns: any = table.prop('columns');
        const render = columns[0].render;
        const result = render(name, { id });

        expect(result.props.url).toEqual(`/templates/edit/${id}`);
        expect(result.props.name).toEqual(name);
    });
});