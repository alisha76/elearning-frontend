import React from "react";
import "./about.css";
import AboutImage from "../../assets/Images/aboutus1.webp"
import AboutImage1 from "../../assets/Images/aboutus2.webp"
import AboutImage2 from "../../assets/Images/aboutus3.webp"

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2  
        data-aos="zoom-in"
    data-aos-duration="1000"
        >Driving Innovation in Online Education for a
          <br />
        <span style={{
            backgroundImage: "linear-gradient(to right, #4567b7, #6495ed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }} >Bright Future</span></h2>
        <p 
         data-aos="zoom-in"
    data-aos-duration="1000"
        >
          We are dedicated to providing high quality online courses to help
          individuals learn and grow in their desired fields. Our experienced
          instruction ensure that each course is tailored for effective learning
          and practical application.
        </p>
      </div>
      <div className="about-images">
      <img 
       data-aos="flip-right"
    data-aos-duration="1000"
      src={AboutImage} alt="about image" className="about-image" />
      <img 
       data-aos="flip-right"
    data-aos-duration="1000"
      src={AboutImage1} alt="about image" className="about-image1" />
      <img 
       data-aos="flip-right"
    data-aos-duration="1000"
      src={AboutImage2} alt="about image" className="about-image2" />
      </div>
    </div>
  );
};

export default About;