import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import { landingFeatures, landingSteps } from "../config/landingContent";
import "../styles/publicpage.css";

const LandPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <p className="preview-notice" role="note">
          Preview version: account registration and personal health-data
          services are not connected yet.
        </p>
        {/* Hero */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span className="hero-label">
              MATERNAL & CHILD HEALTH CARE
            </span>

            <h1>
              Every Mother Deserves
              <span> Care, Support & Guidance.</span>
            </h1>

            <p className="hero-description">
              Jali Mama is a maternal and child health support preview with
              educational resources and general information.
            </p>

            <div className="hero-actions">
              <Link to="/register" className="button button-primary">
                Get Started <span aria-hidden="true">→</span>
              </Link>

              <a href="#features" className="button button-outline">
                Explore Services
              </a>
            </div>

            <div className="hero-trust">
              <span aria-hidden="true">✓</span>
              Accessible health information
              <span aria-hidden="true">✓</span>
              Mother-centred support
            </div>
          </div>

          <div className="hero-visual" aria-label="Mother and child illustration">
            <div className="hero-circle hero-circle-one" />
            <div className="hero-circle hero-circle-two" />

            <div className="hero-illustration">
              <span className="illustration-icon" aria-hidden="true">
                🤱🏽
              </span>
              <span className="illustration-caption">
                Caring for every journey
              </span>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">💗</span>
              <div>
                <strong>Motherhood matters</strong>
                <small>Care at every stage</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">🌱</span>
              <div>
                <strong>Growing together</strong>
                <small>Supporting healthy beginnings</small>
              </div>
            </div>
          </div>
        </section>

      

        {/* Features */}
        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-eyebrow">WHAT WE OFFER</span>
            <h2>Support for Every Stage of Motherhood</h2>
            <p>
              Helpful digital services that support mothers, babies and
              caregivers from pregnancy through early childhood.
            </p>
          </div>

          <div className="features-grid">
            {landingFeatures.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span className="section-eyebrow">EXPLORE THE PREVIEW</span>
            <p>
              Try the features that are available in this preview.
            </p>
          </div>

          <div className="steps-grid">
            {landingSteps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="cta-section">
          <div>
            <h2>Explore maternal and child health information.</h2>
            <p>
              Account creation and private health tracking are not available
              in this preview.
            </p>
          </div>

          <Link to="/register" className="button button-light">
            Open Registration Preview <span aria-hidden="true">→</span>
          </Link>
        </section>

       
      </main>

      <Footer />
    </div>
  );
}

export default LandPage;
