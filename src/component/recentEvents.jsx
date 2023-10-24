import React from 'react'
import './style/mystyle.css'
import { Row } from 'antd';
import product1 from './images/KidsBirthdayParties.jpg'
import product2 from './images/getWellSonn.jpg'
import product3 from './images/CoupleBirthdayParties.jpg'
import product4 from './images/surpriseCakeGifts.jpg'
import { Rate } from 'antd';

function RecentEvents() {
  return (
    <div className='FeatureProduct'>
      <Row>
      <div className='FeatureProducts'><img src={product1} style={{height:'60%', width:'100%'}}>
      </img>
      <div style={{height:'30%', width:'100%',paddingLeft:'5%', paddingTop:'5%'}}>
      <h6>Kids Birthday Parties</h6>
      <p>Delicious Cakes, Perfect for Kids'  Birthday Parties.</p>
      </div>
      </div>
      <div className='FeatureProducts'>
      <img src={product2} style={{height:'60%', width:'100%'}}></img>
      <div style={{height:'30%', width:'100%',paddingLeft:'5%', paddingTop:'5%'}}>
      <h6> Get Well soon cake gifts</h6>
      <p>Send Well Wishes with Get Well Soon Cakes</p>
      </div>
      </div>
      <div className='FeatureProducts'>
      <img src={product3} style={{height:'60%', width:'100%'}}></img>
      <div style={{height:'30%', width:'100%',paddingLeft:'5%', paddingTop:'5%'}}>
      <h6> Couple Birthday Celebrations </h6>
      <p>Celebrate Couples' Birthdays with Our Special Cakes.</p>
      </div>
      </div>
      <div className='FeatureProducts'>
      <img src={product4} style={{height:'60%', width:'100%'}}></img>
      <div style={{height:'30%', width:'100%',paddingLeft:'5%', paddingTop:'5%'}}>
      <h6> Surprise Cake Gifts</h6>
      <p>Exciting Surprise Gift Cakes.</p>
      </div>
      </div>
      </Row>
    </div>
  )
}

export default RecentEvents;
