import React from 'react';
import { shallow } from 'enzyme';
import Table from 'antd/lib/table/Table';
import CharacterSheetList from './CharacterSheetList';

const deleteButtonNumber = 1;
describe('CharacterSheetList', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('onClick on delete button call deleteCharacterSheets from props with characterSheetIds', () => {
        const deleteCharacterSheets = jest.fn();

        const characterSheetAdd = shallow(<CharacterSheetList characterSheetList={[]} deleteCharacterSheets={deleteCharacterSheets} />);

        const props = characterSheetAdd.props();
        const children = props.children;
        const buttons = children;
        const onClick: any = buttons[deleteButtonNumber].props.onClick;

        onClick();

        expect(deleteCharacterSheets).toHaveBeenCalledWith([]);
    });

    it('onChange on table select put selected items to characterSheetIds', () => {
        const characterSheetIds = ['id1', 'id2'];

        const characterSheetAdd = shallow(<CharacterSheetList characterSheetList={[]} deleteCharacterSheets={jest.fn()} />);

        const table = characterSheetAdd.find(Table);
        const rowSelection: any = table.prop('rowSelection');
        const onChange = rowSelection.onChange;

        onChange(characterSheetIds);

        const state = characterSheetAdd.state();
        expect(state).toEqual({
            characterSheetIds
        });
    });

    it('return characterSheetList as dataSource on table', () => {
        const characterSheetList: any = [{ id: 'id1' }, { id: 'id2' }];

        const characterSheetAdd = shallow(<CharacterSheetList characterSheetList={characterSheetList} deleteCharacterSheets={jest.fn()} />);

        const table = characterSheetAdd.find(Table);
        const dataSource: any = table.prop('dataSource');

        expect(dataSource).toEqual(characterSheetList.map((characterSheet: any) => ({
            ...characterSheet,
            key: characterSheet.id
        })));
    });

    it('return character sheet name component as column', () => {
        const name = 'name';
        const id = 'id';

        const characterSheetAdd = shallow(<CharacterSheetList characterSheetList={[]} deleteCharacterSheets={jest.fn()} />);

        const table = characterSheetAdd.find(Table);
        const columns: any = table.prop('columns');
        const render = columns[0].render;
        const result = render(name, { id });

        expect(result.props.url).toEqual(`/charsheets/edit/${id}`);
        expect(result.props.name).toEqual(name);
    });

    it('return template name component as column', () => {
        const name = 'name';
        const id = 'id';

        const characterSheetAdd = shallow(<CharacterSheetList characterSheetList={[]} deleteCharacterSheets={jest.fn()} />);

        const table = characterSheetAdd.find(Table);
        const columns: any = table.prop('columns');
        const render = columns[1].render;
        const result = render({ name, id });

        expect(result.props.url).toEqual(`/templates/edit/${id}`);
        expect(result.props.name).toEqual(name);
    });
});