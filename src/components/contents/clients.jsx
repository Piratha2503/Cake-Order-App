import React, { useState } from 'react';
import { Button, Divider, Radio, Table } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Modify',
    dataIndex: 'modify'
},
{
    title: 'Delete',
    dataIndex: 'delete'
}

];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    modify: <Button type="primary" ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>,
    delete: <Button type="primary" danger ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faTrash} /> </Button>

  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    modify: <Button type="primary" ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>,
    delete: <Button type="primary" danger ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faTrash} /> </Button>

  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    modify: <Button type="primary" ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>,
    delete: <Button type="primary" danger ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faTrash} /> </Button>

  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
    modify: <Button type="primary" ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>,
    delete: <Button type="primary" danger ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faTrash} /> </Button>

  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const Clients = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div >
    <Table 
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default Clients;