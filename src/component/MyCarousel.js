import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import './style/slideshow.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import axios from 'axios';
import { ImagesView } from './ImagesView';

function MyCarousel() {
 
let images = ImagesView()
images = images.filter((img) => img.view === "slideShow")

  return (
    <div >
    <Carousel autoplay>
    {images.map((myImage,index)=>(
      <div key={index}>
      <a><img src={myImage.imgUrl} alt={myImage.altText} style={{height:'600px', width:'100%'}}/></a>
      </div>
    ))}
    </Carousel>
    </div>
  )
}

export default MyCarousel
