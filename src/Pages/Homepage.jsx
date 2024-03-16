/* eslint-disable no-unused-vars */
import Header from "../Components/Header"
import React, { Component } from "react";
import './Pages.css'
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import insta from "./INSTA.png"
import fb from "./FACEBOOK.png"
import lk from "./LINKED.png"
import mail from "./MAIL.png";
const HomePage = () => {
  var settings = {
    className: "sliderr",
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  var settings1 = {
    className: "sliderr-1",
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
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
    <Slider {...settings}>
    <div className="slider-card">
    <h2>1</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>2</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>3</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>4</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>5</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>6</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>7</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>8</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>9</h2>
    <h2>RANDOM......</h2>
    </div>
    <div className="slider-card">
    <h2>10</h2>
    <h2>RANDOM......</h2>
    </div>
    </Slider>
    </div>
    <div className="sessions">
    <h2>Our Latest Sessions</h2>
    <Slider {...settings1}>
    <div className="session-card">
    <div className="session-header">
    <h2>TITLE-1</h2>
    </div>
    <div className="session-content">CONTENT</div>
    </div>
    <div className="session-card">
    <div className="session-header">
    <h2>TITLE-2</h2>
    </div>
    <div className="session-content">CONTENT</div>
    </div>
    <div className="session-card">
    <div className="session-header">
    <h2>TITLE-3</h2>
    </div>
    <div className="session-content">CONTENT</div>
    </div>
    <div className="session-card">
    <div className="session-header">
    <h2>TITLE-4</h2>
    </div>
    <div className="session-content">CONTENT</div>
    </div>
    <div className="session-card">
    <div className="session-header">
    <h2>TITLE-5</h2>
    </div>
    <div className="session-content">CONTENT</div>
    </div>
    </Slider>
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
