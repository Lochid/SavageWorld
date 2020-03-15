import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { shallow } from 'enzyme';
import { Menu, Layout } from 'antd';
const { Content } = Layout;

jest.mock('react-router-dom', () => ({
    Link: jest.fn(),
    useLocation: jest.fn()
}));

const location = {
    pathname: 'pathname'
};

const useLocationMock = useLocation as jest.Mock;
const menuItem = {
    key: 'key',
    name: 'name',
    address: 'address'
};

describe('NavigationBar', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        useLocationMock.mockReturnValue(location);
    });

    it('get location from useLocation and put into putCurrentAddress', () => {
        const putCurrentAddress = jest.fn();
        shallow(<NavigationBar menuItems={[]} putCurrentAddress={putCurrentAddress}><div /></NavigationBar>);

        expect(putCurrentAddress).toHaveBeenCalledWith(location.pathname);
    });

    it('return component with selectedKeys as \'selectedKeys\' attribute', () => {
        const selectedKey = 'selectedKey';
        const navigationBar = shallow(<NavigationBar menuItems={[]} putCurrentAddress={jest.fn()} selectedKey={selectedKey}>
            <div />
        </NavigationBar>);

        const menu = navigationBar.find(Menu);

        const selectedKeys = menu.prop('selectedKeys');

        expect(selectedKeys).toEqual([selectedKey]);
    });

    it('return component with empty string as \'selectedKeys\' attribute if selectedKey is undefined', () => {
        const navigationBar = shallow(<NavigationBar menuItems={[]} putCurrentAddress={jest.fn()}>
            <div />
        </NavigationBar>);

        const menu = navigationBar.find(Menu);

        const selectedKeys = menu.prop('selectedKeys');

        expect(selectedKeys).toEqual(['']);
    });

    it('return component list for each menu item', () => {
        const navigationBar = shallow(<NavigationBar menuItems={[menuItem]} putCurrentAddress={jest.fn()}>
            <div />
        </NavigationBar>);

        const menu = navigationBar.find(Menu);

        const menuItems = menu.children();

        expect(menuItems.length).toEqual(1);
    });

    it('return component list for each menu item and put key to Menu.Item', () => {
        const navigationBar = shallow(<NavigationBar menuItems={[menuItem]} putCurrentAddress={jest.fn()}>
            <div />
        </NavigationBar>);

        const menu = navigationBar.find(Menu);

        const menuItems = menu.find(Menu.Item);
        const key = menuItems.key();
        expect(key).toEqual(menuItem.key);
    });

    it('return component list for each menu item and name to link children and adderss as link\'s to', () => {
        const navigationBar = shallow(<NavigationBar menuItems={[menuItem]} putCurrentAddress={jest.fn()}>
            <div />
        </NavigationBar>);

        const menu = navigationBar.find(Menu);

        const link = menu.find(Link);
        const address = link.prop('to');
        const children = link.prop('children');

        expect(address).toEqual(menuItem.address);
        expect(children).toEqual(menuItem.name);
    });

    it('return component with children as children', () => {
        const child: any = 'child';
        const navigationBar = shallow(<NavigationBar menuItems={[menuItem]} putCurrentAddress={jest.fn()}>
            {child}
        </NavigationBar>);

        const content = navigationBar.find(Content);

        const children = content.prop('children');

        expect(children).toEqual(child);
    });
});