import { Link } from "react-router-dom";
import RegisterForm from "../authforms/RegisterForm";
import "../styles/register.css";

function Register() {
  return (
    <div className="register-page">
      {/* <section className="register-brand-panel">
        <Link to="/" className="register-logo">
          <span className="register-logo-icon">JM</span>
          <span>Jali Mama</span>
        </Link>

        <div className="register-brand-content">
          <span className="register-eyebrow">WELCOME TO JALI MAMA</span>

          <h1>
            Your journey to healthier motherhood starts here.
          </h1>

          <p>
            Get access to maternal and child health information,
            personalised health tracking, reminders and AI-powered
            health guidance.
          </p>

          <div className="register-benefits">
            <div>
              <span className="benefit-check">✓</span>
              Reliable maternal health information
            </div>

            <div>
              <span className="benefit-check">✓</span>
              Pregnancy and child health tracking
            </div>

            <div>
              <span className="benefit-check">✓</span>
              Timely health reminders and guidance
            </div>
          </div>
        </div>

        <p className="register-brand-footer">
          Caring for Mothers, Nurturing Generations.
        </p>
      </section> */}

      <main className="register-content">
        <div className="register-mobile-brand">
          <Link to="/" className="register-logo">
            <span className="register-logo-icon">JM</span>
            <span>Jali Mama</span>
          </Link>
        </div>

        <div className="register-form-container">
          <div className="register-heading">
            <h2>Register</h2>
            <p>
              Registration is not connected. Do not enter real personal
              information or passwords.
            </p>
          </div>

          <RegisterForm />

          <p className="register-login-prompt">
            Already have an account?{" "}
            <Link to="/login">Log in</Link>
          </p>

          <p className="register-security-note">
            Your personal information should be handled securely and
            used only for the purposes explained in our privacy policy.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Register;