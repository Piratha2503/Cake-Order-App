import React from "react";
import MyCarousel from "./MyCarousel";
import MyFooter from "./myfooter";
import "./style/mystyle.css";
import TabTop from "./TabTop";
import { Col, Row, Divider } from "antd";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import Delivery from "./delivery";
import bakeryImage from "./images/bakery.jpg";
import BuyNow from "./buyNow";
import BestSeller from "./bestSeller";
import FeatureProducts from "./featureProducts";
import deliveryImage from './images/delivery.jpg';
const MainView = () => {
  return (
   
    <div>
      <div className="topDiv">Welcome to my Cake Order Website</div>
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
      <div className="howDiv">
        <Row>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
          <div>
            <h2 style={{ marginTop: "15%" }}> HOW IT WORKS</h2>
          </div>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
        </Row>
      </div>
      <Delivery />
      <div style={{ marginTop: "3%" }}>
        <img src={deliveryImage} style={{ width: "100%", height: "600px" }}></img>
      </div>
      <div className="howDiv  Shop">
        <Row>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
          <div style={{ width: "40%" }}>
            <h2 style={{ marginTop: "12%", marginLeft: "3%" }}>
              {" "}
              SHOP BY CATEGORY
            </h2>
          </div>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
        </Row>
      </div>
        <BuyNow/>
        <div className="howDiv  Sell">
        <Row>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
          <div style={{ width: "40%" }}>
            <h2 style={{ marginTop: "15%", marginLeft: "3%" }}>
              {" "}
              BEST SELLERS
            </h2>
          </div>
          <div>
            <h2 className="howItWork">_____</h2>
          </div>
        </Row>
      </div>

<BestSeller/>
<Row style={{marginTop:'-3%'}}>
          <div style={{marginLeft:'23%'}}>
            <h2 className="howItWork" style={{marginLeft:'60%',marginTop:'-5%'}} >_____</h2>
          </div>
          <div style={{ width: "40%" }}>
            <h2 style={{ marginTop: "5%", marginLeft: "13%", width:'58%' }}>
              {" "}
              FEATURE PRODUCTS
            </h2>
          </div>
          <div>
            <h2 className="howItWork" style={{marginLeft:'-150%',marginTop:'-5%'}} >_____</h2>
          </div>
        </Row>
        <FeatureProducts/>
      <img src={bakeryImage} style={{height:'600px', width:'100%'}}/>
      <MyFooter />
      </div>
      
  );
}

export default MainView;
