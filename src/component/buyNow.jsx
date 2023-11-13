import React from 'react'
import{Row} from 'antd';
import {Button} from 'antd'
import background1 from './images/shopingCake01.jpg'
import background2 from './images/shopingCake02.jpg'
import background3 from './images/shopingCake03.jpg'
import { ImagesView } from './ImagesView';
import './style/mystyle.css'

function BuyNow() {
  const images = ImagesView().filter(myimage=>myimage.view === 'Shop Category')
  
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
/*

<Row>
      <div className='buyNow' style={{marginLeft:'8%', backgroundImage:`url(${background1})`}} >
      <h1>WHOLE CAKES</h1>
      <button className='myBtn'> Buy Now
</button>
      </div>
      <div className='buyNow' style={{marginLeft:'8%', backgroundImage:`url(${background1})`}} >
      <h1>WHOLE CAKES</h1>
      <button className='myBtn'> Buy Now
</button>
      </div>
      <div className='buyNow' style={{backgroundImage:`url(${background2})`}}><h1>SLICE CAKES</h1>
      <button className='myBtn'> Buy Now
</button>
</div>
      <div className='buyNow' style={{backgroundImage:`url(${background3})`}}><h1>CUP CAKES</h1>
      <button className='myBtn'> Buy Now </button>
      </div>
      </Row>
*/