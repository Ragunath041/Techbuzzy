import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css'
import logo from '../assets/images/image.png';
import ContactModal from './ContactModal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current page

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path || 
           (path === '/' && location.pathname === '/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="Techbuzzy" />
            </Link>
          </div>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to="/" 
                onClick={handleNavClick}
                className={isActive('/') ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={handleNavClick}
                className={isActive('/about') ? 'nav-link active' : 'nav-link'}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={handleNavClick}
                className={isActive('/services') ? 'nav-link active' : 'nav-link'}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/career" 
                onClick={handleNavClick}
                className={isActive('/career') ? 'nav-link active' : 'nav-link'}
              >
                Career
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                onClick={handleNavClick}
                className={isActive('/blog') ? 'nav-link active' : 'nav-link'}
              >
                Blog
              </Link>
            </li>
            <li>
              <button 
                className="contact-btn"
                onClick={() => {
                  setIsModalOpen(true);
                  setMenuOpen(false);
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Hamburger Menu Icon */}
          <div 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
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
