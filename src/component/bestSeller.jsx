import React from 'react'
import './style/mystyle.css'
import { Row } from 'antd'
import birthdayCake from './images/birthdayCake.jpg'
import weddingCake from './images/weddingCake.jpg'
function BestSeller() {
  return (
    <div>
    <div className='bestSellers'>
    <Row>
    <div className='bestSell'><img src={birthdayCake} style={{height:'100%', width:'100%'}}/></div>
    <div className='bestSell' style={{marginLeft:'1%', padding:'2%', paddingTop:'10%'}}>
    <h1>Birthday Cakes</h1>
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
    <h1>Wedding Cakes</h1>
    <h5 style={{textAlign:'justify', marginTop:'10%'}}>Celebrate your love story with a cake that's as unique and special as your journey together. 
    Contact us today to discuss your dream wedding cake and let us create a sweet memory that will be cherished forever.</h5>
    <button className='orderBtn'> Order Now
</button>
    </div>
    <div className='bestSell' ><img src={weddingCake} style={{height:'100%', width:'100%'}}/></div>
    </Row>
    </div>
    </div>
  )
}

export default BestSeller

/*
.container {
  overflow: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  width: 90%;
  margin: 0 auto;
  padding: 0 15px;
}

.card {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  width: 100%;
}

.container:hover > :not(:hover) {
  opacity: 0.2;
}

.title {
  width: 100%;
  display: inline-block;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin: 1rem auto;
}
<div className="container">
      <div className="card">
        <p className="title">
          Rick Sanchez
        </p>
      </div>
      <div className="card">
        <p className="title">
          Morty Smith
        </p>
      </div>
      <div className="card">
        <p className="title">
          Summer Smith
        </p>
      </div>
      <div className="card">
        <p className="title">
          Beth Smith
        </p>
      </div>
    </div>
*/