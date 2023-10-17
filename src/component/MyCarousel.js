import React from 'react'
import { Carousel } from 'antd';
import './style/slideshow.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'


function MyCarousel() {
  return (
    <div >
    <Carousel autoplay>
      <div>
      <img src={img1} alt='img' style={{height:'600px', width:'100%'}}/>
    </div>
    <div>
    <img src={img2} alt='img' style={{height:'600px', width:'100%'}}/>
    </div>
    <div>
    <img src={img3} alt='img' style={{height:'600px', width:'100%'}}/>
    </div>
   
    </Carousel>
    </div>
  )
}

export default MyCarousel
