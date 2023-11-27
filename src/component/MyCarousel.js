import React from 'react'
import { Carousel } from 'antd';
import './style/slideshow.css'
import { ImagesView } from './ImagesView';


function MyCarousel() {
  const slideshowImages = ImagesView().filter(img=>img.view === 'slideShow')

  return (
    <div>
   
      <Carousel autoplay>
        {slideshowImages.map((myImage, index) => (
          <div key={index}>
            <a>
              <img src={myImage.imgUrl} alt={myImage.altText} style={{ height: '600px', width: '100%' }} />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
