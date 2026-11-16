import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/loginform.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setFormData({ email: "", password: "" });
    setError(
      "Authentication is not connected. Your details were not sent or saved."
    );
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>

      {/* Email */}
      <div className="login-field">
        <label htmlFor="login-email">Email Address</label>

        <input
          id="login-email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>

      {/* Password */}
      <div className="login-field">
        <div className="password-label-row">
          <label htmlFor="login-password">Password</label>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        <div className="password-input-wrapper">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
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
      </div>

      {/* Error */}
      {error && (
        <div className="login-error" role="alert">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="login-submit-button"
      >
        Sign In
      </button>

    </form>
  );
}

export default LoginForm;