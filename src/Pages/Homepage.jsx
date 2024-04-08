/* eslint-disable no-unused-vars */
import Header from "../Components/Header"
import React, { Component } from "react";
import './Pages.css'
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import insta from "./INSTA.png"
import fb from "./FACEBOOK.png"
import lk from "./LINKED.png"
import mail from "./MAIL.png";
const HomePage = () => {
  return  (
    <>
    <Header/>
    <div className="SOCIAL">
    <img src={insta} alt="INSTAGRAM" title="INSTAGRAM"></img>
    <img src={fb} alt="FACEBOOK" title="FACEBOOK"></img>
    <img src={lk} alt="LINKEDIN" title="LINKEDIN"></img>
    <img src={mail} alt="MAIL" title="MAIL"></img>
    </div>
    <div className="hp-1">
    <div className="hp-11">
    <div className="hp-11-content">
    <h2>Redefine<br/>Your Future!</h2>
    <button>Join Now</button>
    </div>
    </div>
    <div className="hp-11">
    <div className="hp-11-img"></div>
    </div>
    </div>
    <Marquee speed={150} loop={0} pauseOnClick className="mark"> 
    <div className="marquee">
    <h2>1</h2>
    </div>
    <div className="marquee">
    <h2>2</h2>
    </div>
    <div className="marquee">
    <h2>3</h2>
    </div>
    <div className="marquee">
    <h2>4</h2>
    </div>
    <div className="marquee">
    <h2>5</h2>
    </div>
    <div className="marquee">
    <h2>6</h2>
    </div>
    <div className="marquee">
    <h2>7</h2>
    </div>
    </Marquee>
    <div className="slider">
    <div className="principle">
    <h2>Pictures</h2>
    </div> 
    <Carousel interval={1800} className="caro" infiniteLoop={true} autoPlay={true} showArrows={false} showIndicators={true} showThumbs={true} stopOnHover={true} width={"70vw"}>
    <div className="slider-card">
        <p>PRINCIPLE 1</p>
    </div>
    <div className="slider-card">
        <p>PRINCIPLE 2</p>
    </div>
    <div className="slider-card">
        <p>PRINCIPLE 3</p>
    </div>
    <div className="slider-card">
        <p>PRINCIPLE 4</p>
    </div>
    <div className="slider-card">
        <p>PRINCIPLE 5</p>
    </div>
</Carousel>
    </div>
    <div className="sessions">
    <h2>Our Latest Sessions</h2>
    <Carousel interval={1800} className="caro" infiniteLoop={true} autoPlay={true} showArrows={false} showIndicators={true} showThumbs={true} stopOnHover={true} width={"90vw"} centerMode={true} autoFocus={true} centerSlidePercentage={100}>
    <div className="slider-card">
        <p>SESSION 1</p>
    </div>
    <div className="slider-card">
        <p>SESSION 2</p>
    </div>
    <div className="slider-card">
        <p>SESSION 3</p>
    </div>
    <div className="slider-card">
        <p>SESSION 4</p>
    </div>
    <div className="slider-card">
        <p>SESSION 5</p>
    </div>
</Carousel>
    </div>
    <div className="skills" id="SKILLS">
    <div className="skills-1">
    <div className="skills-11">
    <h2>TECHNOLOGY</h2>
    <div className="skills-image">
    </div>
    </div>
    <div className="skills-11">
    <div className="skills-image">
    </div>
    <h2>CONTENT<br/>CREATION</h2>
    </div>
    </div>
    <div className="s-title">
    <h2>SKILLS</h2>
    </div>
    <div className="skills-1">
    <div className="skills-11">
    <h2>BUISNESS</h2>
    <div className="skills-image">
    </div>
    </div>
    <div className="skills-11">
    <div className="skills-image">
    </div>
    <h2>PERSONALITY<br/>DEVELOPMENT</h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default HomePage
