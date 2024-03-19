import React from 'react'
import '../assets/styles/Home.css'
import { Container, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';


import { Carousel } from "antd";
import cimg1 from "../assets/images/slide1.jpg";
import cimg2 from "../assets/images/purplechess.png";
import cimg3 from "../assets/images/slide3.jpg";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Slideshow = () => (
  <>
  <Navbar />
  <Carousel
    autoplay
    // effect="fade"
    style={{ marginTop: "", transition: "ease" }}  >
    <div>
    <div
    style={{
      height: "700px",
      lineHeight: "260px",
      //   textAlign: "center",
      backgroundImage: `url(${cimg2})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    ></div>
    <div style={{ width: "1300px" }}>
    
    </div>
    </div>
    <div>
      <div
        style={{
          height: "700px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      ></div>
    </div>
    <div>
      <div
        style={{
          height: "700px",
          lineHeight: "260px",
          //   textAlign: "center",
          backgroundImage: `url(${cimg3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>    
      
    </div>
  </Carousel>
  <div>
  
  </div>
  <div>
  <Footer/>
  </div>
  </>
  

);

export default Slideshow;