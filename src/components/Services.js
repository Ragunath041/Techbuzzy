import '../Styles/Services.css';
function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Software Development</h3>
          <p>Services Include:</p>
          <ul>
            <li>Website & Web App Development (React, Angular, Node.js)</li>
            <li>Enterprise Software Solutions (.NET, Java, Python)</li>
            <li>Mobile App Development (iOS, Android, Flutter)</li>
            <li>API & Microservices Development</li>
            <li>Maintenance & Support</li>
          </ul>
          <p className="tech-label"><strong>Tools & Technologies:</strong></p>
          <p>React | Node.js | Python | Django | .NET | Flutter | MySQL | MongoDB</p>
        </div>

        <div className="service-card">
          <div className="service-icon">☁️</div>
          <h3>Cloud Services</h3>
          <p>Services Include:</p>
          <ul>
            <li>Cloud Architecture & Consulting</li>
            <li>Cloud Migration & Optimization</li>
            <li>DevOps & CI/CD Automation</li>
            <li>Data Warehousing & Analytics (Snowflake, BigQuery, Redshift)</li>
            <li>Backup & Disaster Recovery</li>
          </ul>
          <p className="tech-label"><strong>Tools & Technologies:</strong></p>
          <p>AWS | Azure | GCP | Snowflake | Terraform | Docker | Kubernetes</p>
        </div>

        <div className="service-card">
          <div className="service-icon">✓</div>
          <h3>Software Testing & QA</h3>
          <p>Services Include:</p>
          <ul>
            <li>Manual & Automation Testing</li>
            <li>Functional & Regression Testing</li>
            <li>Performance & Load Testing</li>
            <li>API & Integration Testing</li>
            <li>Security & Penetration Testing</li>
            <li>Mobile App Testing</li>
          </ul>
          <p className="tech-label"><strong>Tools & Technologies:</strong></p>
          <p>Selenium | JMeter | Postman | Playwright | Cypress | Jenkins</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🤖</div>
          <h3>AI & Data Services</h3>
          <p>Services Include:</p>
          <ul>
            <li>Predictive Analytics & Machine Learning</li>
            <li>NLP (Chatbots, Sentiment Analysis)</li>
            <li>Computer Vision</li>
            <li>AI-based Process Automation</li>
            <li>Data Engineering & Data Visualization</li>
          </ul>
          <p className="tech-label"><strong>Tools & Platforms:</strong></p>
          <p>Python | TensorFlow | PyTorch | Power BI | Snowflake | Databricks</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🔒</div>
          <h3>Cyber Security & Networking</h3>
          <p>Services Include:</p>
          <ul>
            <li>Network Security & Firewall Management</li>
            <li>Vulnerability Assessment & Penetration Testing (VAPT)</li>
            <li>Cloud Security (AWS, Azure, GCP)</li>
            <li>Endpoint Protection & 24/7 Threat Monitoring</li>
            <li>SIEM & Log Analytics for incident detection</li>
            <li>Business Continuity & Disaster Recovery (BCP/DR)</li>
            <li>Network Design, Configuration & Performance Optimization</li>
          </ul>
          <p className="tech-label"><strong>Tools & Technologies:</strong></p>
          <p>AWS Security | Azure Security | Fortinet | Palo Alto | Splunk</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
