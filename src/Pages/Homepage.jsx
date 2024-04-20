/* eslint-disable no-unused-vars */
import Header from "../Components/Header"
import React from "react";
import './Pages.css'
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import insta from "./INSTA.png"
import fb from "./FACEBOOK.png"
import lk from "./LINKED.png"
import mail from "./MAIL.png";
import Spline from '@splinetool/react-spline';
import Mouse from "./Mouse";
import msme from './msme.png'
import vit from './vit.png'
import start from './start.png'
import mity from './MITY.png'
import utube from './utube.png'
import buss from './buss.svg'
import comm from './comm.svg'
import tech from './tech.svg'
import content from './content.svg'
const HomePage = () => {
  return  (
    <>
    <Header/>
    <Mouse/>
    <div>
    <div className="SOCIAL">
    <a href="https://www.instagram.com/aptifyr?igsh=MW0xN3Y0ZjlmczRmMw%3D%3D"><img src={insta} alt="INSTAGRAM" title="INSTAGRAM"></img></a>
    <a href="https://www.linkedin.com/company/aptifyrskills/"><img src={lk} alt="LINKEDIN" title="LINKEDIN"></img></a>
    <a href="https://www.youtube.com/@Aptifyr"><img src={utube} alt="YOUTUBE" title="YOUTUBE"></img></a>
    </div>
    </div>
    <div className="hp-1">
    <div className="hp-11">
    <div className="hp-11-content">
    <h2>Redefine<br/>Your Future!</h2>
    <button><a href="https://chat.whatsapp.com/H8Cgxb3Ylqz1X8Gg8h6TkE">Join Now</a></button>
    </div>
    </div>
    <div className="hp-11">
    <div className="hp-11-img spline-background">
    <Spline scene="https://prod.spline.design/Jf3rMvoYCs0hSOFe/scene.splinecode" /></div>
    </div>
    </div>
    <div className="M-container">
    <div className="M">
    <Marquee speed={300} loop={0} pauseOnClick={true} className="mark"> 
    <div className="marquee">
    <img src={msme} alt="MSME LOGO"></img>
    </div>
    <div className="marquee">
    <img src={vit} alt="VIT LOGO"></img>
    </div>
    <div className="marquee">
    <img src={start} alt="START-UP INDIA"></img>
    </div>
    <div className="marquee">
    <img src={mity} alt="MEITY LOGO"></img>
    </div>
    </Marquee>
    </div>
    </div>
    <div className="slider">
    <div className="principle">
    <h2>One Place For</h2>
    <h2>Your <span>Success</span></h2>
    </div> 
    <Carousel interval={1800} className="caro" infiniteLoop={true} autoPlay={true} showArrows={false} showIndicators={true} showThumbs={true} width={"70vw"} centerMode={true} autoFocus={true} centerSlidePercentage={70}>
    <div className="slider-card">
    <div className="slider-card-title">
    <h2>Holistic Development</h2>
    </div>
    <div className="slider-card-content">
    <p>Aptifyr fosters holistic growth by integrating academic excellence with personal development initiatives, ensuring students thrive in all aspects of life.</p>
    </div>
    </div>
    <div className="slider-card1">
    <div className="slider-card-title">
    <h2>Workshops</h2>
    </div>
    <div className="slider-card-content">
    <p>Engaging workshops provide practical insights and valuable learning experiences, empowering students to apply theoretical concepts to real-world scenarios.</p>
    </div>
    </div>
    <div className="slider-card2">
    <div className="slider-card-title">
    <h2>Hands-on Projects</h2>
    </div>
    <div className="slider-card-content">
    <p>Through hands-on projects, students gain practical experience and develop problem-solving skills, enhancing their ability to tackle real-world challenges.</p>
    </div>
    </div>
    <div className="slider-card3">
    <div className="slider-card-title">
    <h2>Expert Educators</h2>
    </div>
    <div className="slider-card-content">
    <p>Our instructors are industry experts, renowned for their expertise and commitment to shaping the next generation of talent.</p>
    </div>
    </div>
    <div className="slider-card4">
    <div className="slider-card-title">
    <h2>Community Engagement</h2>
    </div>
    <div className="slider-card-content">
    <p>We actively engage with our community to create a supportive environment where students can collaborate, learn from each other, and grow together.
    </p>
    </div>
    </div>
</Carousel>
    </div>
    <div className="sessions">
    <h2>Our Latest Sessions</h2>
    <Carousel interval={1800} className="caro" infiniteLoop={true} autoPlay={true} showArrows={false} showIndicators={true} showThumbs={true} stopOnHover={true} width={"95vw"} centerMode={true} autoFocus={true} centerSlidePercentage={70}>
    <div className="slider-card-1">
        <div className="slider-card-title">
        <h2>SESSION TITLE 1</h2>
        </div>
        <div className="slider-card-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="slider-card-1">
        <div className="slider-card-title">
        <h2>SESSIONS TITLE 2</h2>
        </div>
        <div className="slider-card-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="slider-card-1">
        <div className="slider-card-title">
        <h2>SESSIONS TITLE 3</h2>
        </div>
        <div className="slider-card-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="slider-card-1">
        <div className="slider-card-title">
        <h2>SESSIONS TITLE 4</h2>
        </div>
        <div className="slider-card-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="slider-card-1">
        <div className="slider-card-title">
        <h2>SESSIONS TITLE 5</h2>
        </div>
        <div className="slider-card-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</Carousel>
    </div>
    <div className="skills" id="SKILLS">
    <div className="skills-1">
    <div className="skills-11">
    <h2>TECHNOLOGY</h2>
    <div className="skills-image">
    <img src={tech} alt="TECHNOLOGY"></img>
    </div>
    </div>
    <div className="skills-11">
    <div className="skills-image">
    <img src={content} alt="CONTETNT CREATION"></img>
    </div>
    <h2>CONTENT<br/>CREATION</h2>
    </div>
    </div>
    <div className="s-title">
    <Spline scene="https://prod.spline.design/pMOFtZ31K3NSONrT/scene.splinecode"/>
    </div>
    <div className="skills-1">
    <div className="skills-11">
    <h2>BUISNESS</h2>
    <div className="skills-image">
    <img src={buss} alt="BUISNESS"></img>
    </div>
    </div>
    <div className="skills-11">
    <div className="skills-image">
    <img src={comm} alt="PERSONALITY DEVELOPMENT"></img>
    </div>
    <h2>PERSONALITY<br/>DEVELOPMENT</h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default HomePage
