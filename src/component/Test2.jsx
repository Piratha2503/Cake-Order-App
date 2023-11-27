import React, { useEffect, useState } from 'react'
import Test1 from './Test1'
import axios from 'axios'


const Test2 = () => {

    const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8095/cake-orders/img');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
const myImages = []
images.map((img)=>myImages.push(img))
  return (
   <Test1 imgs = {myImages}/>
  );
  
}

export default Test2
