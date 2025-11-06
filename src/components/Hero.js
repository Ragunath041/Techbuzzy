import '../Styles/Hero.css';
import homeImg from '../assets/images/home_img.png';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Transforming Ideas into <span className="highlight">Digital Excellence</span></h1>
        <p>We craft cutting-edge software solutions that drive business growth and innovation. From custom applications to cloud services, we deliver technology that scales with your ambitions.</p>
        <div className="hero-buttons">
  <a href="#home" style={{ textDecoration: 'none' }}>
    <button className="btn btn-primary">Start Your Project Today</button>
  </a>
  <a href="#services" style={{ textDecoration: 'none' }}>
    <button className="btn btn-secondary">View Our Services</button>
  </a>
</div>

      </div>
      <div className="hero-image">
        <img src={homeImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
