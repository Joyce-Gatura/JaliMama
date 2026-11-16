import FeatureNotice from "../components/FeatureNotice";

function Immunization() {
  return (
    <section className="feature-panel">
      <h2>Immunisation schedule</h2>
      <p>Vaccination history and due dates should be confirmed with a provider.</p>
      <FeatureNotice title="No immunisation records">
        A child-specific schedule is not available until secure child records
        and a clinically reviewed schedule are connected.
      </FeatureNotice>
    </section>
  );
}

export default Immunization;