import React from "react";
import MyCarousel from "./MyCarousel";
import MyFooter from "./myfooter";
import "./style/mystyle.css";
import TabTop from "./TabTop";
import { Col, Row, Divider } from "antd";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import Delivery,{Testing} from "./delivery";
import bakeryImage from "./images/bakery.jpg";
import BuyNow from "./buyNow";
import BestSeller from "./bestSeller";
import FeatureProducts from "./featureProducts";
import deliveryImage from './images/delivery.jpg';
import Text from "./description";
import DeliverOptions from "./deliverOptions";
import Faqs from "./faqs";
import RecentEvents from "./recentEvents";
import axios from "axios";
import Test2 from "./Test2";


const MainView = () => {
  const MyImages = [1,2,3];
  return (
   
    <div style={{display:'flex',flexDirection:'column',columnGap:'2em'}}>
      <div className="topDiv">Welcome</div>
      <TabTop />
      <MyCarousel />
      <div className="review">
        <span>
          See our{" "}
          <span>
            <b>47</b>
          </span>{" "}
          reviews on{" "}
        </span>{" "}
        <span style={{ color: "green" }}>
          <StarOutlined />{" "}
        </span>
        <span>Trustpilot</span>
      </div>
      <br/>
      <div className="howDiv">
        <Row style={{display:'flex',justifyContent:'center',columnGap:'1em'}}>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
          <div>
            <h2 style={{ marginTop: "15%" }}> How To Order</h2>
          </div>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
        </Row>
      </div>
      <Delivery/>
      <div style={{ marginTop: "5%" }}>
        <img src={deliveryImage} style={{ width: "100%", height: "600px" }}></img>
      </div>
    
      <div className="howDiv">
        <Row style={{display:'flex',justifyContent:'center',columnGap:'1em'}}>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
          <div>
            <h2 style={{ marginTop: "12%" }}> SHOP BY CATEGORY</h2>
          </div>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
        </Row>
      </div>
      <br/>
        <BuyNow/>
        <br/>
           
<Test2/>
<div className="howDiv">
        <Row style={{display:'flex',justifyContent:'center',columnGap:'1em'}}>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
          <div>
            <h2 style={{ marginTop: "12%" }}> New Arrivals</h2>
          </div>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
        </Row>
      </div>
        <FeatureProducts/>
        <br/>
        <br/>
        <br/>
      <img src={bakeryImage} style={{height:'600px', width:'100%'}}/>
      <Text/>
      <br/>
      <DeliverOptions/>
      
      <br/>
      <div className="howDiv">
        <Row style={{display:'flex',justifyContent:'center',columnGap:'1em'}}>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
          <div>
            <h2 style={{ marginTop: "15%" }}> RECENT POSTS</h2>
          </div>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
        </Row>
      </div>
       <RecentEvents/>
       <Faqs/>
       <br/>
      <MyFooter/>
      <footer style={{fontWeight:'bold',backgroundColor:'#edebe6',position:'relative',paddingLeft:'35%',marginTop:'2%'}}>
      <h6>COPYRIGHT 2023 © ALL RIGHTS RESERVED BY PIRATHA-TECH PVT LTD</h6>
      </footer>
      </div>
      
  );
}

export default MainView;
/*
let [images, setImages] = useState([

      
  ]);

  const showImages = async () => {
    
     const response = await axios.get(`http://localhost:8095/cake-orders/img`)
                                 .then(response=> setImages(response.data));
   };  
   useEffect(() => {
     showImages(); 
   }, []);


images.map((image)=>MyImages.push(image))
*/