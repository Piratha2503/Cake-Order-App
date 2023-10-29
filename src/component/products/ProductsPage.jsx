import {Pagination} from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../style/Style.css';
import { Button } from 'react-bootstrap';

function Products() {
  const [images,setImages] = useState([]);
  const [Num, setNum] =useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
   
    const showImages = async(num)=>{

      const pagenum = num *10;
        const resulst = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${pagenum}&limit=10`);
        setImages(resulst.data.photos);
        setNum(resulst.data.photos);  
    }
    
    useEffect(()=>{
showImages(1)
}
,[currentPage]);
console.log(images);
  return (
    <div className='proDisplay'>
    <div className='imgDisplay'>
    {images.map((myimage,index)=>(
      <div className='imgDis'>
      
      <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
        <img className='images'
      key={index}
      src={myimage.url}
      alt={myimage.altText}
      />
      <h3> ${myimage.user} </h3>
        </div>
        <div className="flip-card-back">
        <Button className='btn btn-warning'> Buy Now </Button>
        </div>
    </div>
</div>
      </div>
     ))
    }
    <div className='paging'>
     <Pagination className='paginate' onChange={(numb)=>showImages(numb)} defaultCurrent={1} total={50} />
     </div>
     </div>
     
    </div>
  )
}
//
export default Products
