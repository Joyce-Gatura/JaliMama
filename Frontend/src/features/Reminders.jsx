import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function Reminders() {
  return (
    <FeaturePage
      title="Health Reminders"
      description="Keep important care dates visible once reminder services are available."
    >
      <section className="feature-panel">
        <h2>No reminders to show</h2>
        <p>
          Reminder scheduling and delivery need a connected account and
          backend service.
        </p>
        <FeatureNotice>
          Reminders cannot currently be created, scheduled, or delivered.
          Please continue to use your clinic's instructions for care dates.
        </FeatureNotice>
      </section>
    </FeaturePage>
  );
}

export default Reminders;