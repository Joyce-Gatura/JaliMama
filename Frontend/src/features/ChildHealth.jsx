import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import GrowthMonitoring from "./GrowthMonitoring";
import HealthRecords from "./HealthRecords";
import Immunization from "./Immunization";
import "../styles/features.css";

function ChildHealth() {
  return (
    <FeaturePage
      title="Child Health"
      description="A place for child growth, immunisation, and health records."
    >
      <div className="feature-content-stack">
        <FeatureNotice>
          Child profiles and caregiver relationships are not connected to
          authenticated storage. No child data is being displayed or saved.
        </FeatureNotice>
        <GrowthMonitoring />
        <Immunization />
        <HealthRecords />
      </div>
    </FeaturePage>
  );
}

export default ChildHealth;