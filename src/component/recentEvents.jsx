import React from 'react'
import './style/mystyle.css'
import { Row } from 'antd';
import product1 from './imgs/Pro1.jpg'
import product2 from './imgs/pro2.jpg'
import product3 from './imgs/pro3.jpg'
import product4 from './imgs/pro4.jpg'
import { Rate } from 'antd';

function RecentEvents() {
  return (
    <div className='FeatureProduct'>
      <Row>
      <div className='FeatureProducts'><img src={product4} style={{height:'60%', width:'100%'}}>
      </img>
      <div style={{height:'30%', width:'100%',paddingLeft:'25%', paddingTop:'5%'}}>
      <h6>Strawberry Cake</h6>
      </div>
      </div>
      <div className='FeatureProducts'>
      <img src={product3} style={{height:'60%', width:'100%'}}></img>
      <div style={{height:'30%', width:'100%',paddingLeft:'20%', paddingTop:'5%'}}>
      <h6> Dark Chocolate Cake</h6>
      </div>
      </div>
      <div className='FeatureProducts'>
      <img src={product2} style={{height:'60%', width:'100%'}}></img>
      <div style={{height:'30%', width:'100%',paddingLeft:'15%', paddingTop:'5%'}}>
      <h6> Vanilla & Pineapple Cake</h6>
      </div>
      </div>
      <div className='FeatureProducts'>
      <img src={product1} style={{height:'60%', width:'100%'}}></img>
      <div style={{height:'30%', width:'100%',paddingLeft:'5%', paddingTop:'5%'}}>
      <h6> Vanilla Sponge & Raspberry Cake</h6>
      </div>
      </div>
      </Row>
    </div>
  )
}

export default RecentEvents;
