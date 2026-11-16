import { Link } from "react-router-dom";
import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function ResetPassword() {
  return (
    <main className="standalone-page">
      <FeaturePage
        title="Choose a new password"
        description="A password can only be changed using a verified, time-limited reset link."
      >
        <FeatureNotice>
          Password reset is not available because authentication and reset
          token verification are not implemented.
        </FeatureNotice>
        <Link className="feature-back-link" to="/login">
          Return to sign in
        </Link>
      </FeaturePage>
    </main>
  );
}

export default ResetPassword;