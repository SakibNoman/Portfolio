import React from 'react';
import { FaGem, FaHeart } from 'react-icons/fa';
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <ProSidebar width="230px">
            <SidebarHeader>
                <p>Sakib</p>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Home
                <Link to="/" />
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>About
                <Link to="/about" />
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>Projects
                <Link to="/portfolio" />
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>Blogs
                <Link to="/blogs" />
                    </MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <p>Hello</p>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideNav;