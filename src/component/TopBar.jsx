import {Pagination} from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TopBar() {
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
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const paging = ()=>{
  for (let index = 0; index < images.length; index++) {
        //return(<Pagination.Item>{index}</Pagination.Item>)
        console.log(index)
  }
}
  return (
    <div >
    <div style={{display:'flex',flexWrap:'wrap',rowGap:'1em',columnGap:'1em',padding:'2%'}}>
    {images.map((myimage,index)=>(
      
      <img
      key={index}
      src={myimage.url}
      alt={myimage.altText}
      style={{width: '200px', height: '200px'}}
      />
      
     ))
    }
     </div>
     <div className='paging'>
     <Pagination className='paginate' onChange={(numb)=>showImages(numb)} defaultCurrent={1} total={50} />
     </div>
    </div>
  )
}
//
export default TopBar
