import React from "react";
import MyCarousel from "./MyCarousel";
import MyFooter from "./myfooter";
import './style/mystyle.css';
import TabTop from "./TabTop";
import { Col, Row } from "antd";

const MainView = ()=>{
    
return (
    <>
    <div className="topDiv">Welcome to my Cake Order Website</div>
    <TabTop/>
    <MyCarousel/>
    <Row>
        <Col></Col>
        <Col><div ><h2 style={{float:'left'}}>_________</h2> <h1 style={{float:'left'}}>How It works</h1> <h2>__________</h2></div></Col>
    </Row>  
    <MyFooter/>
    
    </>
);
}

export default MainView;