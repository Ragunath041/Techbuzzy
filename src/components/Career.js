import '../Styles/Career.css';

function Career() {
  return (
    <section className="career" id="career">
      <div className="career-container">
        <h2>Join Our Team</h2>
        <p>Build the future of technology with us. We're looking for passionate individuals who want to make a difference.</p>

        <div className="why-choose">
          <h3>Why Choose Techbuzzy?</h3>
          <p>We believe in creating an environment where innovation thrives and careers flourish</p>

          <div className="benefits">
            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h4>Remote-First Culture</h4>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💚</div>
              <h4>Health & Wellness</h4>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h4>Learning & Development</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Career;
