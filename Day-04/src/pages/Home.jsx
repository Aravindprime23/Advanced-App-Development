import React from 'react'
import '../assets/styles/Home.css'
import { Container, Typography, Paper } from '@mui/material';
import Slider from 'react-slick';


import { Carousel } from "antd";
import cimg1 from "../assets/images/slide1.jpg";
import cimg2 from "../assets/images/purplechess.png";
import cimg3 from "../assets/images/bannerslide.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Slideshow = () => (
  <>
  <Navbar />
  <div>
  <div className="landing">
    <div className="inside-box">
      <section className="landing1">
        <div className="overlay">
          <h1><b>Welcome to Chess Academy</b></h1>
          <p>Unlock the strategic world of chess with our expert guidance and personalized courses.</p>
          <div className="cta-whole">
          <Link to="/contact" className="cta-button">ENQUIRE NOW</Link>
          <Link to="/academy" className="cta-button">GET STARTED</Link>
          </div>

        </div>
      </section>
    </div>
    </div>
  </div>
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
      <Footer/>
  </div>
  </>
  

);

export default Slideshow;