import React from 'react';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'Can I Cancel My Orders',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
  {
    key: '7',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
const Faqs = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} style={{width:'85%',marginLeft:'6%', fontSize:'15px', fontWeight:'bold'}} />;
};
export default Faqs;