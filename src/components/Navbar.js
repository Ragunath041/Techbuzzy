import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'
import logo from '../assets/images/image.png';
import ContactModal from './ContactModal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="Techbuzzy" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/blog">Blog</Link></li>
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
