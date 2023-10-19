import React from 'react'
import{Row} from 'antd';
import {Button} from 'antd'
import background1 from './images/shopingCake01.jpg'
import background2 from './images/shopingCake02.jpg'
import background3 from './images/shopingCake03.jpg'

function BuyNow() {
  return (
    <div>
      <Row>
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
      <button className='myBtn'> Buy Now
</button></div>
      </Row>
    </div>
  )
}

export default BuyNow
