import { Link, useLocation } from "react-router-dom";
import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function LegalInformation() {
  const { pathname } = useLocation();
  const isPrivacy = pathname === "/privacy";

  return (
    <main className="standalone-page">
      <FeaturePage
        title={isPrivacy ? "Privacy information" : "Terms and conditions"}
        description="These documents must be reviewed and published before account services are enabled."
      >
        <FeatureNotice>
          {isPrivacy
            ? "A complete privacy notice describing data collection, use, sharing, retention, and user rights has not been published. Do not submit personal or health information."
            : "Terms of service have not been published. Registration is not available in this preview."}
        </FeatureNotice>
        <Link className="feature-back-link" to="/register">
          Return to registration preview
        </Link>
      </FeaturePage>
    </main>
  );
}

export default LegalInformation;
