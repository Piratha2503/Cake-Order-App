  import React from 'react'
  import { FaCake } from 'react-icons/fa';
  import cakes from './imgs/cake.png'
  import './style/mystyle.css'
  import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
  import { faBirthdayCake,faCalendarDays,faTruckFast,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'antd';


  function Delivery() {
      
    return (
      <div style={{marginLeft:'13%'}}>
        <Row>
        <div className='delivery'><a><FontAwesomeIcon icon={faBirthdayCake} style={{color: "#df1616",height:'200px',width:'50%',marginLeft:'30%',marginTop:'-20%'}} /></a></div>
        <div className="delivery" style={{width:'5%'}}><FontAwesomeIcon icon={faChevronRight} style={{color: 'Black',height:'100px',width:'50%',padding:'10%',paddingLeft:'20%', paddingTop:'65%'}}/></div>
        <div className='delivery'><a><FontAwesomeIcon icon={faCalendarDays} style={{color: "#df1616",height:'200px',width:'50%',marginLeft:'30%',marginTop:'-20%'}} /></a></div>
        <div className="delivery" style={{width:'5%'}}><FontAwesomeIcon icon={faChevronRight} style={{color: 'Black',height:'100px',width:'50%',padding:'10%',paddingLeft:'20%', paddingTop:'65%'}}/></div>
        <div className='delivery'><a><FontAwesomeIcon icon={faTruckFast} style={{color: "#df1616",height:'200px',width:'50%',marginLeft:'30%',marginTop:'-12%'}} /></a></div>
        </Row>
        <Row>
        <div className='delivery description'><a><h4>Select Your Cake</h4></a></div>
        <div className='delivery description' style={{width:'5%'}}></div>
        <div className='delivery description'><a><h4>Choose your delivery date and time window</h4></a></div>
        <div className='delivery description' style={{width:'5%'}}></div>
        <div className='delivery description'><a><h4>A friendly Cake Run driver delivers your cake</h4></a></div>
        </Row>
      </div>
    )
  }

  export default Delivery
