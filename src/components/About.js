import '../Styles/About.css';
import aboutImg from '../assets/images/about_img.png';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Founded with a vision to bridge the gap between innovative technology and business success, we are a team of passionate developers, architects, and strategists.</p>
          <p>From startups to enterprise organizations, we've helped hundreds of companies transform their digital presence and streamline their operations through custom software solutions.</p>

          <div className="stats">
            <div className="stat">
              <h3>150+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>
      </div>
    </section>
  );
}

export default About;
