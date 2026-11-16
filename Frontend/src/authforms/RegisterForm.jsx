import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/registerform.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const {
      fullName,
      email,
      phone,
      password,
      confirmPassword,
      agreeToTerms,
    } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password ||
      !confirmPassword
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("Please accept the Terms and Conditions to continue.");
      return;
    }

    setSuccess(
      "The form was checked in this page only. Nothing was sent or saved because registration is not connected."
    );
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="register-field">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          autoComplete="name"
          required
        />
      </div>

      <div className="register-field">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>

      <div className="register-field">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+254 7XX XXX XXX"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          required
        />
      </div>

      <div className="register-field">
        <label htmlFor="password">Password</label>

        <div className="register-password-wrapper">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={8}
            required
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((previous) => !previous)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <small className="register-field-hint">
          Use at least 8 characters.
        </small>
      </div>

      <div className="register-field">
        <label htmlFor="confirmPassword">Confirm Password</label>

        <div className="register-password-wrapper">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowConfirmPassword((previous) => !previous)
            }
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div className="register-terms">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
        />

        <label htmlFor="agreeToTerms">
          I agree to the <Link to="/terms">Terms and Conditions</Link>{" "}
          and <Link to="/privacy">Privacy Policy</Link>.
        </label>
      </div>

      {error && (
        <p className="register-message register-error" role="alert">
          {error}
        </p>
      )}

      {success && (
        <p className="register-message register-notice" role="status">
          {success}
        </p>
      )}

      <button type="submit" className="register-submit-button">
        Validate preview form
      </button>
    </form>
  );
}

export default RegisterForm;