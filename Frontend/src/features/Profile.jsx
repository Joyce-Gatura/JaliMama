
import { useEffect, useState } from "react";
import FeaturePage from "../components/FeaturePage";
import "../styles/features.css";

function Profile({
  profile = {},
  onSave,
  saving = false,
}) {
  const [formData, setFormData] = useState({
    fullName: profile.fullName || "",
    email: profile.email || "",
    phoneNumber: profile.phoneNumber || "",
    county: profile.county || "",
    subCounty: profile.subCounty || "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    setFormData({
      fullName: profile.fullName || "",
      email: profile.email || "",
      phoneNumber: profile.phoneNumber || "",
      county: profile.county || "",
      subCounty: profile.subCounty || "",
    });
  }, [profile]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!onSave) {
      setMessage("Profile saving is not connected to the backend yet.");
      return;
    }

    try {
      await onSave({
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        county: formData.county.trim(),
        subCounty: formData.subCounty.trim(),
      });

      setMessage("Profile updated successfully.");
    } catch (error) {
      setMessage(error.message || "Unable to update your profile.");
    }
  };

  return (
    <FeaturePage
      title="My Profile"
      description="Manage your personal and contact information."
    >
      <section className="profile-section">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="profile-form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              readOnly
              autoComplete="email"
            />
            <small>
              Your account email is managed through account verification.
            </small>
          </div>

          <div className="profile-form-group">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="e.g. 0712345678"
              autoComplete="tel"
            />
          </div>

          <div className="profile-form-group">
            <label htmlFor="county">County</label>
            <input
              id="county"
              name="county"
              type="text"
              value={formData.county}
              onChange={handleChange}
              placeholder="Enter your county"
              autoComplete="address-level1"
            />
          </div>

          <div className="profile-form-group">
            <label htmlFor="subCounty">Sub-county</label>
            <input
              id="subCounty"
              name="subCounty"
              type="text"
              value={formData.subCounty}
              onChange={handleChange}
              placeholder="Enter your sub-county"
              autoComplete="address-level2"
            />
          </div>

          {message && (
            <p className="profile-form-message" role="status">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="feature-primary-button"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </form>
      </section>
    </FeaturePage>
  );
}

export default Profile;
