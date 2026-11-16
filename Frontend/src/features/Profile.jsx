import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function Profile() {
  return (
    <FeaturePage
      title="My Profile"
      description="Manage your account information and privacy preferences."
    >
      <FeatureNotice>
        Profile data cannot be created or displayed because registration,
        authentication, and secure account storage are not implemented.
        Do not enter personal information on this page.
      </FeatureNotice>
    </FeaturePage>
  );
}

export default Profile;