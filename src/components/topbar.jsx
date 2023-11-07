import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './syle/styling.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const Navigation = 'My Navigation Bar'

const items = [
  {
    label: `${Navigation}`,
    key: 'mail',
    icon: <MailOutlined />,
  },
 
  {
    label: 'User ',
    key: 'SubMenu',
    icon: <FontAwesomeIcon icon={faUserLarge} />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
];
const TopBar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='topmenu'/>;
};
export default TopBar;