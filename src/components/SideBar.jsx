import React, { useState } from 'react';
import logo from './imgs/myLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, } from '@fortawesome/free-solid-svg-icons'

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', '1', <FontAwesomeIcon icon={faHouse} />),
  getItem('Website Maintainance ', 'sub1', <MailOutlined />, [
    getItem('Products', '5'),
    getItem('Designs', '6'),
  ]),
  getItem('Orders', '2', <DesktopOutlined />),
  getItem('Clients', '3', <ContainerOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
];
const SideBar = () => {
  
  return (
    <div
      style={{
        width: 256,
        display:'flex',
        flexDirection:'column',
        columnGap:'2em',
        backgroundColor:'#101038'
      }}
    >
    <img src={logo} style={{height:'75px',width:'100%'}}></img>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};
export default SideBar;