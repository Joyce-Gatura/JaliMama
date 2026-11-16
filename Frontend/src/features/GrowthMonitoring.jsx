import FeatureNotice from "../components/FeatureNotice";

function GrowthMonitoring() {
  return (
    <section className="feature-panel">
      <h2>Growth monitoring</h2>
      <p>Growth measurements require an associated child health record.</p>
      <FeatureNotice title="No child growth records">
        Child profiles, measurements, and growth charts are not connected to
        a secure data service yet.
      </FeatureNotice>
    </section>
  );
}

export default GrowthMonitoring;