import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="landing-header">
      <nav className="landing-navbar" aria-label="Main navigation">
        <Link to="/" className="landing-brand" aria-label="Jali Mama home">
          <span className="brand-symbol">JM</span>
          <span>Jali Mama</span>
        </Link>

        <div className="landing-nav-links">
          <a href="#home">Home</a>
          <a href="#features">Our Services</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        <div className="landing-nav-actions">
          <Link to="/login" className="nav-login">
            Log In
          </Link>
          <Link to="/register" className="button button-primary nav-register">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;