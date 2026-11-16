import FeatureNotice from "../components/FeatureNotice";

function HealthRecords() {
  return (
    <section className="feature-panel">
      <h2>Health records</h2>
      <p>Private records should only be displayed from an authenticated service.</p>
      <FeatureNotice title="No records available">
        Health records are not stored by this application yet. Do not enter
        or upload private medical information here.
      </FeatureNotice>
    </section>
  );
}

export default HealthRecords;