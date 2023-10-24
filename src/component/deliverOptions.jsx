import { Row } from 'antd'
import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTruckFast,faFileInvoiceDollar,faBusinessTime } from '@fortawesome/free-solid-svg-icons';
 
function DeliverOptions() {
  return (
    <div className='deliver'>
      <Row>
      <div className='deliver options'>
      <Row>
      <div className='logos'><FontAwesomeIcon icon={faTruckFast} color='white' style={{fontSize:'30px',padding:'20%'}} /></div>
      <h6 style={{fontWeight:'bold', paddingLeft:'5%',paddingTop:'2%'}}>Delivery Available</h6><br/> 
      <p style={{paddingTop:'10%',marginLeft:'-40%' }}>Anywhere in Northern Province</p>  
      </Row>
      </div>
      <div className='deliver options'>
      <Row>
      <div className='logos'><FontAwesomeIcon icon={faBusinessTime} color='white' style={{fontSize:'30px',padding:'22%'}}/></div>
      <h6 style={{fontWeight:'bold', paddingLeft:'5%',paddingTop:'2%'}}>Flexible Delivery Times</h6><br/> 
      <p style={{paddingTop:'10%',marginLeft:'-50%' }}>Anywhere in Northern Province</p>  
      </Row>
      </div>
      <div className='deliver options'>
      <Row>
      <div className='logos'><FontAwesomeIcon icon={faFileInvoiceDollar} color='white' style={{fontSize:'30px',paddingLeft:'32%',paddingTop:'20%'}} /></div>
      <h6 style={{fontWeight:'bold', paddingLeft:'5%',paddingTop:'2%'}}>Easy Payment Options</h6><br/> 
      <p style={{paddingTop:'10%',marginLeft:'-47%' }}>Trusted under CBSL Policies</p>  
      </Row>
      </div>
      </Row>
    </div>
  )
}

export default DeliverOptions
