import React, { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuItemProps } from '../../types/navigationBar';

const { Content, Sider } = Layout;

export interface NavigationBarProps {
    children: ReactElement | ReactElement[];
    menuItems: MenuItemProps[];
    selectedKey?: string;
    putCurrentAddress: (address: string) => void;
}

const AppRouter = ({
    children,
    menuItems,
    selectedKey,
    putCurrentAddress
}: NavigationBarProps) => {
    const location = useLocation();
    putCurrentAddress(location.pathname);

    return (
        <Layout>
            <Sider>
                <Menu selectedKeys={[selectedKey ?? '']} style={{ height: '100%' }}>
                    {menuItems
                        .map(({ key, name, address }) => <Menu.Item key={key}>
                            <Link to={address}>{name}</Link>
                        </Menu.Item>)}
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {children}
            </Content>
        </Layout>
    );
};

export default AppRouter;
