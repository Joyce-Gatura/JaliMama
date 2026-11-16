import { Link } from "react-router-dom";
import LoginForm from "../authforms/LoginForm";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">


        {/* Right Section */}
        <section className="login-form-section">
          <div className="login-form-wrapper">
            <div className="login-mobile-brand">
              <Link to="/" className="login-brand">
                {/* <span className="login-brand-icon">JM</span> */}
                <span>Jali Mama</span>
              </Link>
            </div>

            <div className="login-heading">
              <h2>Welcome Back</h2>
              <p>
                Sign-in is not connected in this preview. Do not enter a
                real password.
              </p>
            </div>

            <LoginForm />

            <div className="login-register">
              Don't have an account?
              <Link to="/register"> Create Account</Link>
            </div>

            <div className="login-security-note">
              Account services and secure sessions are not available yet.
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Login;