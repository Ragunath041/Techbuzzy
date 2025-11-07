import '../Styles/Career.css';
import '../Styles/GlobalStyles.css'

function Career() {
  return (
    <section className="career">
      <div className="career-container">
        <h2>Join Our Team</h2>
        <p>Build the future of technology with us. We're looking for passionate individuals who want to make a difference.</p>

        <div className="why-choose">
          <h3>Why Choose Techbuzzy?</h3>
          <p>We believe in creating an environment where innovation thrives and careers flourish</p>

          <div className="benefits">
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h4>Remote-First Culture</h4>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <h4>Health & Wellness</h4>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h4>Learning & Development</h4>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>Get In Touch</h3>
          <p>Ready to join our team? Reach out to us today!</p>

          <div className="contact-info">
            <div className="contact-item">
              <h4>Career Inquiries</h4>
              <a href="mailto:hr@techbuzzy.com">hr@techbuzzy.com</a>
            </div>
            <div className="contact-item">
              <h4>General Inquiries</h4>
              <a href="mailto:info@techbuzzy.com">info@techbuzzy.com</a>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <a href="tel:+919840544987">+91 98405 44987</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
