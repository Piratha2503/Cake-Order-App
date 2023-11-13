import React from 'react';
import { Menu } from 'antd';
import cake from '../images/shopingCake01.jpg';
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
    getItem('Fruit Cakes', 'sub1', <img src={cake} style={{width:'35px',height:'35px'}}/>, [
    getItem('Fruit Cakes', 'g1', null, 
    [getItem('Strawberry', '1'), getItem('Pine-Apple', '2'),
    getItem('Dates', '3')] , 'group')]),
    getItem('Occasions', 'sub2', <img src={cake} style={{width:'35px',height:'35px'}}/>, [
    getItem('Birthdays', '5'),
    getItem('Mothers Day', '6'),
    getItem('Fathers Day', '7'),
    getItem('Wedding/Reception', '8'),
    getItem('Get Well Soon', '9'),
    getItem('Christmas', '10'),
  ]),
  {
    type: 'divider',
  },
    getItem('Cup Cakes', 'sub4', <img src={cake} style={{width:'35px',height:'35px'}}/>, [
    getItem('Option 9', '11'),
    getItem('Option 10', '12'),
    getItem('Option 11', '13'),
    getItem('Option 12', '14'),
  ]),];
const SideMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: '100%',
        fontWeight:'bold',
        color:'blue'
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />





  );
};
export default SideMenu;