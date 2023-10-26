import React from 'react'
import './style/mystyle.css'
import { Row } from 'antd';
import product1 from './imgs/Pro1.jpg'
import product2 from './imgs/pro2.jpg'
import product3 from './imgs/pro3.jpg'
import product4 from './imgs/pro4.jpg'
import { Rate } from 'antd';

function FeatureProducts() {
  return (
    <div className='FeatureProduct'>
      <Row>
      <div className='card FeatureProducts'><img className='fpimg' src={product4} >
      </img>
      <div style={{height:'40%', width:'100%',paddingLeft:'2%', paddingTop:'5%'}}>
      <h6>Strawberry Cake</h6>
      <h3 style={{marginLeft:'2%',color:'green'}}> $39 </h3>
      <Rate allowHalf defaultValue={1.5} style={{marginTop:'1%'}}/>
      </div>
      </div>
      <div className='card FeatureProducts'>
      <img src={product3} className='fpimg'></img>
      <div style={{height:'40%', width:'100%',paddingLeft:'1%', paddingTop:'5%'}}>
      <h6> Dark Chocolate Cake</h6>
      <h3 style={{color:'green'}}> $39 </h3>
      <Rate allowHalf defaultValue={3.25} style={{marginLeft:'1%',marginTop:'1%'}}/>
      </div>
      </div>
      <div className='card FeatureProducts'>
      <img src={product2} className='fpimg'></img>
      <div style={{height:'40%', width:'100%', paddingTop:'5%'}}>
      <h6> Vanilla & Pineapple Cake</h6>
      <h3 style={{color:'green'}}> $39 </h3>
      <Rate allowHalf defaultValue={2.5} style={{marginTop:'1%'}}/>
      </div>
      </div>
      <div className='card FeatureProducts'>
      <img src={product1} className='fpimg'></img>
      <div style={{height:'40%', width:'100%',paddingLeft:'5%', paddingTop:'5%'}}>
      <h6> Vanilla Sponge & Raspberry Cake</h6>
      <h3 style={{marginLeft:'5%',color:'green'}}> $39 </h3>
      <Rate allowHalf defaultValue={1.5} style={{marginLeft:'10%',marginTop:'1%'}}/>
      </div>
      </div>
      </Row>
      
    </div>
  )
}
//https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20
export default FeatureProducts;
