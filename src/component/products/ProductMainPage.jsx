import React from 'react'
import Products from './ProductsPage'
import TabTop from '../TabTop'
import Myfooter from '../myfooter'
import Faqs from '../faqs'
import SideMenu from './SideMenu'

function ProductMainPage() {
  return (
    <div style={{display:'flex',flexDirection:'column',rowGap:'1em'}}>
    <TabTop/>
    <br/>
    <div>
    <div style={{float:'left', width:'20%'}}>
    <SideMenu/>
    </div>
    <div style={{width:'95%', marginLeft:'-1%'}}>
      <Products/>
      </div>
    </div>
      <div>
      <Faqs/>
      </div>
      <br/>
      <Myfooter/>
    </div>
  )
}

export default ProductMainPage
