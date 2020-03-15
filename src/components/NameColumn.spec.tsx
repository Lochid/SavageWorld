import React from 'react';
import NameColumn from './NameColumn';
import { shallow } from 'enzyme';

const url = 'url';
const name = 'name';

describe('NameColumn', () => {
    it('return component with url as \'to\' attribute', () => {
        const nameColumn = shallow(<NameColumn url={url} name={name} />);

        const to = nameColumn.prop('to');

        expect(to).toBe(url);
    });
    it('return component with name as children', () => {
        const nameColumn = shallow(<NameColumn url={url} name={name} />);

        const children = nameColumn.prop('children');

        expect(children).toBe(name);
    });
});