import React from 'react'
import './style/mystyle.css'
import { Row } from 'antd'
import logo from './imgs/myLogo.jpg'

function Myfooter() {
  return (
    <div style={{marginTop:'2%'}}>
     <Row> <div className='line'></div>
      <img src={logo} style={{height:'100px', width:'20%', marginLeft:'1%'}}></img>
     <div className='line' style={{marginLeft:'1%'}}></div>
     </Row>
    </div>
  )
}

export default Myfooter
