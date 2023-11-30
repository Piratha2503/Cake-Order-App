import React from 'react'
import { FaCake } from 'react-icons/fa';
import cakes from './imgs/cake.png'
import './style/mystyle.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBirthdayCake,faCalendarDays,faTruckFast,faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'antd';
import deliveryCakeImage from './images/deliveryCake.jpg'
import deliveryCalenderImage from './images/deliveryCalender.jpg'
import deliveryVehicleImage from './images/deliveryVehicle.jpg'
import arrowImage from './images/arrow.jpg'
function Test2() {
    
  return (
    <div style={{marginLeft:'5%',display:'flex', flexDirection:'column', columnGap:'1em', marginTop:'1%', width:'90%'}}>
      <div style={{display:'flex', flexDirection:'row', rowGap:'1em',justifyContent:'center'}}>
      <div className='delivery'><img src={deliveryCakeImage} style={{width:'85%'}} />
      <div className='deldescription'><a><h4>Select Your Cake</h4></a></div>
      </div>
      <div className='delivery' style={{width:'10%'}}><img src={arrowImage} style={{height:'80px', width:'85%',marginTop:'50%'}}/></div>
      <div className='delivery'><img src={deliveryCalenderImage} style={{width:'85%'}}/>
      <div className='deldescription'><a><h4>Choose your delivery date and time</h4></a></div>
      </div>
      <div className='delivery' style={{width:'10%'}}><img src={arrowImage} style={{height:'80px', width:'85%',marginTop:'50%'}}/></div>
      <div className='delivery'><img src={deliveryVehicleImage} style={{width:'85%'}}/>
      <div className='deldescription'><a><h4>A friendly Cake Run driver delivers your cake</h4></a></div>
      </div>
     </div>
    </div>
  )
}

export default Test2
