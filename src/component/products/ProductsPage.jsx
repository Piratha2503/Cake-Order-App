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
    const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${pagenum}&limit=${pageSize}`);
    setImages(response.data.photos);
    setCurrentPage(num);
  };


  useEffect(() => {
   
    showImages(currentPage); // Load images when the component mounts
  }, []);
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
                    src={myimage.url}
                    alt={myimage.altText}
                  />
                  <h1 style={{ fontWeight: 'bold' }}> ${myimage.user} </h1>
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
