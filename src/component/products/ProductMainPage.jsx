import React from 'react'
import Products from './ProductsPage'
import TabTop from '../TabTop'
import Myfooter from '../myfooter'
import Faqs from '../faqs'
import SideMenu from './SideMenu'

function ProductMainPage() {
  return (
    <div>
    <div className="topDiv">Online Ordering Website</div>
    <div style={{display:'flex',flexDirection:'column',rowGap:'2em'}}>
    <TabTop/>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{float:'left', width:'20%'}}>
    <SideMenu/>
    </div>
    <div style={{width:'100%',}}>
      <Products/>
      </div>
    </div>
      <div>
      <Faqs/>
      </div>
      <Myfooter/>
    </div>
    </div>
  )
}

export default ProductMainPage
