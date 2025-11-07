import React, { useState } from 'react';
import '../Styles/Hero.css';
import '../Styles/GlobalStyles.css';
import homeImg from '../assets/images/home_img.png';
import ContactModal from './ContactModal';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Transforming Ideas into <span className="highlight">Digital Excellence</span>
          </h1>
          <p>
            We craft cutting-edge software solutions that drive business growth and innovation. 
            From custom applications to cloud services, we deliver technology that scales with your ambitions.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Project Today
            </button>
            
            <a href="services" style={{ textDecoration: 'none' }}>
              <button className="btn btn-secondary">
                View Our Services
              </button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={homeImg} alt="Digital Solutions" />
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default Hero;
