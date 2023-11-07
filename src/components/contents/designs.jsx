import { Button, Table } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


const Designs = () => {
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
        design.image = <img src={design.imgUrl} style={{height:'60px',width:'60px'}}/>
        design.modify = <Button type="primary" ghost style={{border:'none', fontSize:'20px'}}> <FontAwesomeIcon icon={faPenToSquare} /> </Button>
        design.delete = <Button type="primary" danger ghost style={{border:'none', fontSize:'20px'}} > <FontAwesomeIcon icon={faTrash} /> </Button>
    })
  return (
    <div style={{display:'flex',flexDirection:'column',  justifyContent:'center'}}>
    <div >
    <Table columns={columns} dataSource={Designs} pagination={{ pageSize: 5 }} onChange={(num)=> console.log(num)} />
    </div>
    </div>
  )
}

export default Designs
