import { useState } from 'react';
import '../Styles/Navbar.css'
import logo from '../assets/images/logo.png';
import ContactModal from './ContactModal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="Techbuzzy" />
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#blog">Blog</a></li>
            <li>
              <button 
                className="contact-btn"
                onClick={() => setIsModalOpen(true)}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default Navbar;
