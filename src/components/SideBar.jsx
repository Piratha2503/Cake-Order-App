import React, { useEffect, useState } from 'react';
import logo from './imgs/myLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faCommentDots, faElevator, faGlobe, faHouse, faListCheck, faPeopleCarryBox, faPeopleGroup, faUserGroup, faUserTag, } from '@fortawesome/free-solid-svg-icons'

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
import { useLocation,useNavigate } from 'react-router-dom';
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
  {label:"Home",key:'/',icon: <FontAwesomeIcon icon={faHouse} />},
  {label:"Website Maintainance",icon:<FontAwesomeIcon icon={faGlobe} />,
  children:[{label:"Cake Designs",key:'/designs',icon:<FontAwesomeIcon icon={faCakeCandles} />},
  {label:"Occasions",key:'/occasions',icon:<FontAwesomeIcon icon={faListCheck}/>}]},
  {label:"Client Maintainance",icon:<FontAwesomeIcon icon={faUserTag}/>,
children:[{label:"Clients",key:'/clients',icon: <FontAwesomeIcon icon={faUserGroup} />},
{label:"Orders",key:'/orders',icon: <FontAwesomeIcon icon={faElevator} />},
{label:"Deliveries",key:'/deliveries',icon: <FontAwesomeIcon icon={faPeopleCarryBox} />},
{label:"Feedbacks",key:'/feedback',icon: <FontAwesomeIcon icon={faCommentDots} />}
]}
];

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div
      className='sideMenu'>
    <img src={logo} style={{height:'75px',width:'100%'}}></img>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
       onClick={(item)=>navigate(item.key)}
      />
    </div>
  );
};
export default SideBar;