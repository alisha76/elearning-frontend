import React, { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
import "./codesections.css"
import { useNavigate } from 'react-router-dom';

const CodeSections = () => {
  const typedRef = useRef(null)
  const typedRef2 = useRef(null)
  const [isLoggedIn, setIsLoggedIn] = useState(); // store user's login status


  const navigate = useNavigate();
  useEffect(() => {
    // check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    const options = {
      strings: [
       "Our Learning Management System (LMS) is designed to provide a flexible and accessible platform for students to learn and grow at their own pace. With our LMS, students can access a wide range of courses and resources from anywhere, at any time, and on any device. This allows them to take control of their learning journey and achieve their academic and professional goals. Our LMS offers a comprehensive and engaging learning experience that helps students achieve their full potential. With a user-friendly interface and interactive tools, our LMS provides a supportive and inclusive environment that fosters academic success and personal growth."
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      break: true
    }

    const typed = new Typed(typedRef.current, options)
    const typed2 = new Typed(typedRef2.current, options)

    return () => {
      typed.destroy()
      typed2.destroy()
    }
  }, [])



  const handleLearnMoreClick = () => {
    if (isLoggedIn) {
      navigate('/account'); // navigate to courses page if user is logged in
    } else {
      navigate('/login'); // navigate to login page if user is not logged in
    }
  };

  
  const handleTryItYourselfClick = () => {
    if (isLoggedIn) {
      navigate('/account'); // navigate to courses page if user is logged in
    } else {
      navigate('/login'); // navigate to login page if user is not logged in
    }
  };


  return (
    <>
    
      <div className="container" style={{
        height: '100vh', // take up full page height
        // width:'96.4%',
        display: 'flex', // use flexbox to align elements
        justifyContent: 'pace-between', // space elements evenly
        padding: '20px', // add some padding
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // glass background
      }}>
        
        <div className="code-block"
         data-aos="fade-up"
    data-aos-duration="1000"
        style={{
          width: '70%', // take up 50% of the page width
          height: '50%',
          marginTop:'100px', // take up full page height
          marginLeft:'60px',
        }}>
          <pre style={{
            width: '90%', // take up full width
            height: '70%', // take up full height
            padding: '5px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // glass background
            boxShadow: '0px 0px 10px yellow', // yellow shadow effect
            color: 'white',
            overflowY: 'auto' // add vertical scrollbar if text is too long
          }}>
            <code ref={typedRef} style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all'
            }}></code>
          </pre>
        </div>
        <div className="text-section"
         data-aos="fade-up"
    data-aos-duration="1000"
        style={{
          width: '90%', // take up 40% of the page width
          marginLeft: '20px',
          marginTop:'100px', // add some margin between the text and code blocks
          marginBottom:'-20px',
           marginRight:'0px'
        }}>
         <h2>Unlock Your
  <span style={{
    backgroundImage: "linear-gradient(to right, #4567b7, #8e44ad)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}> Coding Potential</span>
</h2>
          <p>
           " Our courses are designed and taught by industry experts who have years of 
            <br/>experience in coding and are passionate about sharing their knowledge with you."
          </p>
          <button onClick={handleTryItYourselfClick} className="common-btn">Try it yourself</button>
        </div>
      </div>


      <div className="container" style={{
        height: '60vh', // take up full page height
        display: 'flex', // use flexbox to align elements
        justifyContent: 'pace-between', // space elements evenly
        padding: '10px', // add some padding
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // glass background
        marginTop:'-100px',
      }}>
        <div className="text-section"
         data-aos="fade-up"
    data-aos-duration="1000"
        style={{
          width: '90%', // take up 40% of the page width
          marginRight: '20px' ,// add some margin between the text and code blocks
          marginBottom:'-100px',
           marginTop:'100px',
           marginLeft:'50px'
        }}>
         <h2>Start
  <span style={{
    backgroundImage: "linear-gradient(to right, #4567b7, #8e44ad)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}> coding in seconds</span>
</h2>
          <p>
          "Go ahead, give it a try. Our hands-on learning environment means you'll be
          <br /> writing real code from your very first lesson."
          </p>
          <button onClick={handleLearnMoreClick} className="common-btn">Learn More</button>
        </div>
        <div className="code-block"
         data-aos="fade-up"
    data-aos-duration="1000"
        style={{
          width: '70%', // take up 50% of the page width
          height: '50%',
          marginTop:'110px' // take up full page height
        }}>
          <pre style={{
                       width: '90%', // take up full width
                       height: '70%', // take up full height
                       padding: '10px',
                       borderRadius: '10px',
                       backgroundColor: 'rgba(255, 255, 255, 0.2)', // glass background
                       boxShadow: '0px 0px 10px yellow', // yellow shadow effect
                       color: 'white',
                       overflowY: 'auto' // add vertical scrollbar if text is too long
                     }}>
                       <code ref={typedRef2} style={{
                         whiteSpace: 'pre-wrap',
                         wordBreak: 'break-all'
                       }}></code>
                     </pre>
                   </div>
                 </div>
                
               </>
             );
           };
           
           export default CodeSections;

        