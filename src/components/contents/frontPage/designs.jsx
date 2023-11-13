import { Button, Table } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const Designs = () => {
  const navigate = useNavigate();
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Image',
          dataIndex: 'image'
        },
        {
          title: 'Price',
          dataIndex: 'price'
        },
          {
            title: 'Category',
            dataIndex: 'view'
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
    const [Designs, setDesigns] = useState([]);

    const getDesigns = async ()=>{
        const Designs = await axios.get("http://localhost:8095/cake-orders/img")
                        .then(response=>{setDesigns(response.data);
                        console.log(response.data)})
    }

    useEffect(()=>{
            getDesigns();
    },[]);
    Designs.forEach((design)=>{
        design.key = design.id;
        design.image = <img src={design.imgUrl} style={{height:'35px',width:'60px'}}/>
        design.modify = <Button type="primary" ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>
        design.delete = <Button type="primary" danger ghost style={{border:'none', fontSize:'20px'}} > <FontAwesomeIcon icon={faTrash} /> </Button>
    })
  return (
    <div className='contentWithAdd'>
    <div className='addButton' id='designAdd'>
    <Button className='btn btn-info' onClick={()=>navigate('/designs/addEdit')}>Add / Edit</Button>
    </div>
    <br/>
    <div>
    <Table columns={columns} dataSource={Designs} pagination={{ pageSize: 5 }} />
    </div>
    </div>
  )
}

export default Designs
