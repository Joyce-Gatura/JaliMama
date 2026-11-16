import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function Settings() {
  return (
    <FeaturePage
      title="Settings"
      description="Account and privacy controls will be available when secure account services are connected."
    >
      <FeatureNotice>
        No preferences or account settings are saved by this build.
      </FeatureNotice>
    </FeaturePage>
  );
}

export default Settings;