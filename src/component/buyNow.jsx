import React from 'react'

import './style/mystyle.css'
import { ImagesView } from './ImagesView'

function BuyNow() {
  const images = ImagesView().filter(img=>img.view === 'Shop Category')
 
  
  return (
    <div className='shopCategory'>
  
      {images.map((img,index)=>(
        <div className='buyNow' style={{backgroundImage:`url(${img.imgUrl})`}} key={index}>
        <h1 className='buyNowHead'>{img.name}</h1>
        <button className='myBtn'>Buy Now</button>
      </div>

  ))}

    </div>
  )
}

export default BuyNow
