import { Pagination } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../style/Style.css';
import { Button } from 'react-bootstrap';

function Products() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const showImages = async (num) => {
    const pagenum = num * pageSize;
    const response = await axios.get(`http://localhost:8095/cake-orders/img`);
    setImages(response.data);
   
    setCurrentPage(num);
  };

  useEffect(() => {
   
    showImages(currentPage); 
  }, []);
  for (let index = 0; index < images.length; index++) {
    console.log(images[index].imgPath)
    
  }
  return (
    <div className='proDisplay' >
      <div className='imgDisplay'>
        {images.map((myimage, index) => (
          <div className='imgDis' key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className='images'
                    src= "file:///D:/Final Projects/image1.jpg"
                    alt={myimage.altText}
                  />
                  <h3 style={{ fontWeight: 'bold' }}> {myimage.price}/- </h3>
                </div>
                <div className="flip-card-back">
                  <Button variant="outline-danger" className='buy'>Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='paging'>
          <Pagination className='paginate' onChange={(current) => showImages(current)} defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}

export default Products;
