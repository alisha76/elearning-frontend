import React, { useState } from 'react';
import "./contact.css";
import supportImage from '../../assets/Images/support.png';

const defaultContactFormData = () => {
  return {
    username: '',
    email: '',
    message: '',
  };
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData());

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: { // Fixed 'header' to 'headers'
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
        setContact(defaultContactFormData()); // Reset the form
      } else {
        console.error("Failed to send message");
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while sending the message");
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="main-heading">Contact Us</h1>
        </div>

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img 
              data-aos="fade-up"
              data-aos-duration="1000"
              src={supportImage} alt="we are always ready to help" />
          </div>

          <section className="section-form"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols={30}
                  rows={6}
                ></textarea>
              </div>

              <button type="submit" className='common-btn'>Submit</button>
            </form>
          </section>
        </div>
        <section className='mb-3'
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.9876170756!2d74.33438930000003!3d31.482940349999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722191764678!5m2!1sen!2s"
            // width=" 1450"
            // height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;