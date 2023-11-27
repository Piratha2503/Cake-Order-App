import React from 'react'
import './style/mystyle.css'
import { Row } from 'antd'
import birthdayCake from './images/birthdayCake.jpg'
import weddingCake from './images/weddingCake.jpg'
import { ImagesView } from './ImagesView'


function BestSeller() {

  const BestSellerImgs = ImagesView().filter(img=>img.view === 'Best Sellers')
  const firstImage = BestSellerImgs.length > 0 ? BestSellerImgs[0].imgUrl : null;
  const secondImage = BestSellerImgs.length > 1 ? BestSellerImgs[1].imgUrl : null;
  return (
    
    <div>
   
    <div className='bestSellers'>
    <Row>
    <div className='bestSell'><img src={firstImage} style={{height:'100%', width:'100%'}}/></div>
    <div className='bestSell' style={{marginLeft:'1%', padding:'2%', paddingTop:'10%'}}>
    <h1>{}</h1>
    <h5 style={{textAlign:'justify', marginTop:'10%'}}>Elevate your birthday celebration with a cake that's not only a feast for the taste buds but also a feast for the eyes. Our commitment to quality and artistry is evident in every slice, 
    and our cakes are the perfect centerpiece for your birthday festivities</h5>
    <button className='orderBtn'> Order Now
</button>
    </div>
    </Row>
    </div>
    <div className='bestSellers'>
    <Row>
    <div className='bestSell' style={{marginLeft:'1%', padding:'2%',paddingRight:'5%', paddingTop:'10%'}}>
    <h1>{}</h1>
    <h5 style={{textAlign:'justify', marginTop:'10%'}}>Celebrate your love story with a cake that's as unique and special as your journey together. 
    Contact us today to discuss your dream wedding cake and let us create a sweet memory that will be cherished forever.</h5>
    <button className='orderBtn'> Order Now
</button>
    </div>
    <div className='bestSell' ><img src={secondImage} style={{height:'100%', width:'100%'}}/></div>
    </Row>
    </div>
    </div>
  )
}

export default BestSeller

/*

*/