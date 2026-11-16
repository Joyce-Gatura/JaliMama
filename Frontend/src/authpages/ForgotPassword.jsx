import { Link } from "react-router-dom";
import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function ForgotPassword() {
  return (
    <main className="standalone-page">
      <FeaturePage
        title="Reset your password"
        description="Password recovery requires a secure email and authentication service."
      >
        <FeatureNotice>
          Password reset is not available yet. No reset email has been sent.
        </FeatureNotice>
        <Link className="feature-back-link" to="/login">
          Return to sign in
        </Link>
      </FeaturePage>
    </main>
  );
}

export default ForgotPassword;