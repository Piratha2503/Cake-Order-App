import React, { useEffect, useState } from 'react';
import { Button, Divider, Radio, Table, notification, Space, Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Api from '../../Api.jsx';

const deleting = async(id)=>{
  const deleteCustomer = await axios.delete(`${Api()}/companyUsers/${id}`)
  .then((response) => {
    console.log('DELETE Response:', response.data);
    if (response.data.statusCode !== '20000') {
      notification.error({ message: response.data.message });
    }
    else notification.success({ message: response.data.message });
  })
  .catch((error) => {
    console.error('DELETE Error:', error);
  });
}
 
const Clients = () => {
 
  const columns = [
    {
      title: 'Id',
      dataIndex: 'idNo',
    },
    {
      title: 'Name',
      dataIndex: 'lastName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber',
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
  const [Customers, setCustomers] = useState([])
  const [Pages, setPages] = useState(50)

  const getAllCustomers = async ()=>{
    const getCustomers = await axios.get(`${Api()}/companyUsers?page=0&size=100&direction=DESC&sortField=updatedAt`);
    setCustomers(getCustomers.data.result.companyUsers);
   
   
  };

useEffect(()=>{ 
      getAllCustomers();
      
},[]);

  Customers.forEach((customer)=>{
  customer.key = customer.id;
  customer.idNo = Customers.indexOf(customer)+1
  customer.modify = <Button type="primary" ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>
  customer.delete = <Button type="primary" danger ghost style={{border:'none', fontSize:'20px'}} onClick={()=>deleting(customer.id)}> <FontAwesomeIcon icon={faTrash} /> </Button>
})

  return (
    <div style={{display:'flex',flexDirection:'column',  justifyContent:'center'}}>
    <div >
    <Table columns={columns} dataSource={Customers} pagination={{ pageSize: 5 }} onChange={(num)=> console.log(num)} />
    </div>
    </div>
  );
};
export default Clients;

/*
// POST request
axios.post(`${baseURL}/resource`, postData)
  .then((response) => {
    console.log('POST Response:', response.data);
  })
  .catch((error) => {
    console.error('POST Error:', error);
  });

// PUT request
axios.put(`${baseURL}/resource/1`, postData)
  .then((response) => {
    console.log('PUT Response:', response.data);
  })
  .catch((error) => {
    console.error('PUT Error:', error);
  });

// PATCH request
axios.patch(`${baseURL}/resource/1`, postData)
  .then((response) => {
    console.log('PATCH Response:', response.data);
  })
  .catch((error) => {
    console.error('PATCH Error:', error);
  });

// DELETE request
axios.delete(`${baseURL}/resource/1`)
  .then((response) => {
    console.log('DELETE Response:', response.data);
  })
  .catch((error) => {
    console.error('DELETE Error:', error);
  });

*/