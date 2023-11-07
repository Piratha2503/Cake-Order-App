import React from 'react'
import TopBar from './topbar'
import './syle/styling.css'
import MyFooter from './MyFooter'
import SideBar from './SideBar'
import MainContents from './MainContents'

function Main() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'#052c65'}}>
    <div className='side'>
    <SideBar/>
    </div>
    <div className='topandcontent'>
    <div>
    <TopBar/>
    </div>
    <div className='content' id='sandc'>
    <div id='sandc' className='mycontent'>
    <MainContents/>
    </div>
    </div>
    <MyFooter/>
    </div>

    </div>

  )
}
//
export default Main
