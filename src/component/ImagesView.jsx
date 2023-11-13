import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function ImagesView() {
    let [images, setImages] = useState([]);
 
    const showImages = async () => {
      
       const response = await axios.get(`http://localhost:8095/cake-orders/img`)
                                   .then(response=> setImages(response.data));
     };  
     useEffect(() => {
       showImages(); 
     }, []);
const MyImages = [];

images.map((image)=>MyImages.push(image))
  return MyImages
}

