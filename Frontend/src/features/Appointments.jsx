import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function Appointments() {
  return (
    <FeaturePage
      title="Appointments"
      description="Review and manage antenatal, postnatal, and child-health visits."
    >
      <div className="feature-content-stack">
        <section className="feature-panel">
          <h2>Upcoming and past visits</h2>
          <p>
            Appointments will appear here when an account and appointment
            service are connected.
          </p>
          <FeatureNotice>
            Appointment creation, updates, reminders, and storage are not
            available yet. No appointment records are being stored.
          </FeatureNotice>
        </section>
      </div>
    </FeaturePage>
  );
}

export default Appointments;