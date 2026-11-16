import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="footer-brand">
        <Link to="/" className="landing-brand">
          <span className="brand-symbol">JM</span>
          <span>Jali Mama</span>
        </Link>
        <p>Caring for Mothers, Nurturing Generations.</p>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#features">Services</a>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </nav>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Jali Mama. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;