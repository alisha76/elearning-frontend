import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import backgroundImage from "../../assets/Images/abstract-glowing-coding-big-data-interface-dark-background-technology-futuristic-network-3d-rendering_670147-22979.avif";
import Instructor from "../../components/teacher/Teacher";
import CodeSections from "../../components/codesections/CodeSections";




const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      >
        <div className="home-content"
         data-aos="zoom-in"
         data-aos-duration="1000"
        >
        <h1>
          Empower your Future with <span style={{
            backgroundImage: "linear-gradient(to right, #4567b7, #8e44ad)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Coding Skills</span>
        </h1>
        <p style={{ color: "white" }}>
          With our online code coding course, you can learn at your own place, from anywhere in the world, and get access to a wealth of resources, including hands-on practice etc
        </p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <CodeSections/>
      <Instructor/>
      <Testimonials />
    </div>
  );
};

export default Home;