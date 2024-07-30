import React, { useState } from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faInfoCircle, faUser, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isAuth }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header >
      <div className="logo">E-learning platform</div>
      <div className="menu-icon" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`link ${showMenu ? 'show' : ''}`}>
        {
          showMenu ? (
            <div className="menu-text">
              <Link to={'/'}>
                <FontAwesomeIcon icon={faHome} /><span>Home</span>
              </Link>
              <Link to={'/courses'}>
                <FontAwesomeIcon icon={faBook} /><span>Courses</span>
              </Link>
              <Link to={'/about'}>
                <FontAwesomeIcon icon={faInfoCircle} /><span>About</span>
              </Link>
              <Link to={'/contact'}>
                <FontAwesomeIcon icon={faEnvelope} /><span>Contact</span>
              </Link>
              {
                isAuth ? (
                  <Link to={'/account'}>
                    <FontAwesomeIcon icon={faUser} /><span>Account</span>
                  </Link>
                ) : (
                  <Link to={'/login'}>
                    <FontAwesomeIcon icon={faUser} /><span>Login</span>
                  </Link>
                )
              }
            </div>
          ) : (
            <div className="nav-links">
              <Link to={'/'}>
                <FontAwesomeIcon icon={faHome} /><span>Home</span>
              </Link>
              <Link to={'/courses'}>
                <FontAwesomeIcon icon={faBook} /><span>Courses</span>
              </Link>
              <Link to={'/about'}>
                <FontAwesomeIcon icon={faInfoCircle} /><span>About</span>
              </Link>
              <Link to={'/contact'}>
                <FontAwesomeIcon icon={faEnvelope} /><span>Contact</span>
              </Link>
              {
                isAuth ? (
                  <Link to={'/account'}>
                    <FontAwesomeIcon icon={faUser} /><span>Account</span>
                  </Link>
                ) : (
                  <Link to={'/login'}>
                    <FontAwesomeIcon icon={faUser} /><span>Login</span>
                  </Link>
                )
              }
            </div>
          )
        }
      </div>
    </header>
  )
}

export default Header;