import { Link } from "react-router-dom";
import FeaturePage from "../components/FeaturePage";

function DashboardFeaturedPage() {
  return (
    <FeaturePage
      title="Page not found"
      description="The dashboard page you're looking for does not exist."
    >
      <Link to="/dashboard" className="feature-back-link">
        Return to dashboard
      </Link>
    </FeaturePage>
  );
}

export default DashboardFeaturedPage;
