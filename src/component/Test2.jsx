import React from 'react'
import './style/mystyle.css'
import special1 from './images/special1.jpg'
import special2 from './images/special2.jpg'
import special3 from './images/special4.jpg'
import headDec from './images/headingDec.jpg'



function Test2() {
  return (
    <div style={{display:'flex',justifyContent:'center',height:'auto', backgroundColor:'#faf9f5'}}>
    <div id='specialPro'>
    <div className='specialpros'>
    <img src={special1} style={{height:'40vh', width:'49%'}}/>
    <img src={special2} style={{height:'40vh', width:'49%'}}/>
    <img src={special3} style={{height:'42vh', width:'98%'}}/> 
    </div>
    <div className='specialpros' style={{border:'1px solid brown'}}>
    <div id='subSpecialpros'>
    <h1>Our Special Designs</h1>
    <img src={headDec} style={{height:'25px', width:'70%'}}/>
    </div>
    <div id='subSpecialpros'>
    <h5 style={{textAlign:'justify',margin:'1%'}}>
    Elevate your birthday celebration with a cake that's not only a feast for 
    the taste buds but also a feast for the eyes. Our commitment to quality and 
    artistry is evident in every slice, and our cakes are the perfect centerpiece 
    for your birthday festivities
    </h5>
    </div>
   <div id='subSpecialpros'>
   <button className='orderBtn' style={{height:'10vh',width:'45vh', display:'flex', justifyContent:'center'}}> View Designs 
   </button>
   </div>
    </div>
    </div>
    </div>
  )
}

export default Test2
