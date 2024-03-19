import React from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';
import pawn from '../assets/images/pawn.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
      <Link to='/'>
      <img src={pawn} width='100px' className="navbar-logo"></img>
      </Link>
        <ul className="nav-menu">
        <li className="nav-item">
        <Link to='/academy'>Academy</Link>
        </li>
          <li className="nav-item">
              <Link to='/contact'>Contact</Link>
           
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Lectures
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Training
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Gifting
            </a>
          </li>
          <li className="nav-item">
          <Link to='/signup'>Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
