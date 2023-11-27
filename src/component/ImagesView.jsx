import React, { useEffect, useState } from 'react';
import MyCarousel from './MyCarousel';
import axios from 'axios';
import BuyNow from './buyNow';
import BestSeller from './bestSeller';

export function ImagesView() {
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:8095/cake-orders/img');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  useEffect(() => {

    fetchImages();
  }, []);

  const myImages = [];

  images.map(img=>myImages.push(img))

  return myImages;
}

