import React from 'react'
import { Form, Input } from 'antd'
import { Inbox } from 'react-bootstrap-icons'
import '../../syle/styling.css'
import { useNavigate } from 'react-router-dom'
function DesignAddEdit() {
  const navigate = useNavigate();
  return (
    <div className='designCards'>
    <div className="card">
    <div className="card-details">
      <p className="text-title">Slide Show</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/slides')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Shop Category</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/shop')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Best Sellers</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/sellers')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Feature Products</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/featureProducts')}>Add / Edit</button>
  </div>
  <div className="card">
    <div className="card-details">
      <p className="text-title">Recent Posts</p>
      <p className="text-body">Here are the details of the card</p>
    </div>
    <button className="card-button" onClick={()=>navigate('/designs/recent')}>Add / Edit</button>
  </div>
  
    </div>
  )
}

export default DesignAddEdit
