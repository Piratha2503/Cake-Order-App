import axios from 'axios'
import React, { useState } from 'react'

function TopBar() {
const [myUrl,setmyUrl] = useState("")
    const showImages = async()=>{
        const resulst = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
        console.log(resulst.data.photos[0].url);
        setmyUrl(resulst.data.photos[0].url);
    }
showImages();
  return (
    <div>
     <img src={myUrl} style={{height:'300px',width:'300px'}}/> 
    </div>
  )
}
//
export default TopBar
