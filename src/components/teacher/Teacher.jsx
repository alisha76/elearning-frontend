// Teacher.js
import React, { useEffect, useState } from 'react';
import "./teacher.css"
import { Link, useNavigate } from 'react-router-dom';
import teacherImage from '../../assets/Images/teacher3.png';

const Teacher = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(); // store user's login status
  const navigate = useNavigate();

  useEffect(() => {
    // check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLearnMoreClick = () => {
    if (isLoggedIn) {
      navigate('/account'); // navigate to courses page if user is logged in
    } else {
      navigate('/login'); // navigate to login page if user is not logged in
    }
  };

  return (
    <div className="teacher-container">
      <div className="teacher-image-container"
       data-aos="flip-left"
    data-aos-duration="1000"
      >
        <img src={teacherImage} alt="Teacher Image" className="teacher-image" />
      </div>
      <div className="teacher-actions"
       data-aos="fade-left"
    data-aos-duration="1000"
      >
      <h1>Become an 
        <br/>
        <span style={{
            backgroundImage: "linear-gradient(to right, #4567b7, #6495ed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Instructor</span> </h1>
        <p>
        "Share your expertise and make a difference by becoming an instructor on our LMS platform!
        <br /> Create engaging online courses, sharing your knowledge and skills with learners around the world.
        <br /> With our user-friendly tools and resources, you can easily design and deliver high-quality 
       <br /> course content, and inspire a love of learning. Join our community of 
       <br /> instructors today and start making a positive impact on the lives of others!"
        </p>
        <button onClick={handleLearnMoreClick} className="common-btn">Learn More</button>      </div>
      </div>
  );
};

export default Teacher;