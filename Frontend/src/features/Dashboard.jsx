
import "../styles/dashboard.css";
import "../styles/dashboard-shared.css";
import DashboardOverviewCard from "../components/dashboard/DashboardOverviewCard";
import {
  dashboardFeatures,
  dashboardVideos,
} from "../config/dashboardContent";

function Dashboard() {
  return (
    <div className="dashboard-home">
      {/* Welcome Section */}
      <section className="dashboard-welcome">
        <div className="welcome-content">
          <span className="dashboard-welcome-label">
            MATERNAL & CHILD HEALTH COMPANION
          </span>

          <h1>Healthy Mom, Healthy Child</h1>

          <p>
            Your journey matters. Access personalised health information,
            pregnancy guidance and child health support.
          </p>
        </div>

        <img
          src="/Jalimom.png"
          alt="Mother holding her baby"
          className="welcomeimage"
        />
      </section>

      {/* Health Overview */}
      <section className="dashboard-overview-section">
        <div className="dashboard-section-heading">
          <div>
            <h2>Your Health Overview</h2>
            <p>
                Explore available information and preview planned services.
            </p>
          </div>
        </div>

        <div className="dashboard-overview-grid">
          {dashboardFeatures.map((feature) => (
            <DashboardOverviewCard
              feature={feature}
              key={feature.title}
              videos={dashboardVideos}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
