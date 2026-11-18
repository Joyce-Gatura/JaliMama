
import { useState } from "react";
import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import "../styles/features.css";

function Settings() {
  const [preferences, setPreferences] = useState({
    preferredLanguage: "English",
    pregnancyReminders: true,
    immunisationReminders: true,
    appointmentReminders: true,
    emailNotifications: true,
    smsNotifications: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePreferenceChange = (event) => {
    const { name, value, type, checked } = event.target;

    setPreferences((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSavePreferences = (event) => {
    event.preventDefault();

    alert(
      "Settings are currently stored for this session only. Backend integration is required for permanent storage."
    );
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    if (passwordData.newPassword.length < 8) {
      alert("Your new password must contain at least 8 characters.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Your new passwords do not match.");
      return;
    }

    alert(
      "Password changes are not yet connected to the authentication service."
    );

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <FeaturePage
      title="Settings"
      description="Manage your language, health reminders and account preferences."
    >
      <div className="settings-container">
        <FeatureNotice>
          Settings are currently stored in the page only. Changes will not
          persist after leaving or refreshing this page until backend
          integration is implemented.
        </FeatureNotice>

        <section className="settings-section">
          <div className="settings-section-heading">
            <h2>Language</h2>
            <p>Choose your preferred application language.</p>
          </div>

          <div className="settings-form-group">
            <label htmlFor="preferredLanguage">
              Preferred language
            </label>

            <select
              id="preferredLanguage"
              name="preferredLanguage"
              value={preferences.preferredLanguage}
              onChange={handlePreferenceChange}
            >
              <option value="English">English</option>
              <option value="Kiswahili">Kiswahili</option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <div className="settings-section-heading">
            <h2>Health reminders</h2>
            <p>Choose the health reminders you would like to receive.</p>
          </div>

          <div className="settings-options">
            <label className="settings-option">
              <span>
                <strong>Pregnancy reminders</strong>
                <small>
                  Pregnancy progress and antenatal care reminders.
                </small>
              </span>

              <input
                type="checkbox"
                name="pregnancyReminders"
                checked={preferences.pregnancyReminders}
                onChange={handlePreferenceChange}
              />
            </label>

            <label className="settings-option">
              <span>
                <strong>Child immunisation reminders</strong>
                <small>
                  Reminders for upcoming child vaccinations.
                </small>
              </span>

              <input
                type="checkbox"
                name="immunisationReminders"
                checked={preferences.immunisationReminders}
                onChange={handlePreferenceChange}
              />
            </label>

            <label className="settings-option">
              <span>
                <strong>Appointment reminders</strong>
                <small>
                  Reminders for scheduled healthcare appointments.
                </small>
              </span>

              <input
                type="checkbox"
                name="appointmentReminders"
                checked={preferences.appointmentReminders}
                onChange={handlePreferenceChange}
              />
            </label>
          </div>
        </section>

        <section className="settings-section">
          <div className="settings-section-heading">
            <h2>Notification channels</h2>
            <p>Choose how you would like to receive notifications.</p>
          </div>

          <div className="settings-options">
            <label className="settings-option">
              <span>
                <strong>Email notifications</strong>
                <small>Receive reminders through email.</small>
              </span>

              <input
                type="checkbox"
                name="emailNotifications"
                checked={preferences.emailNotifications}
                onChange={handlePreferenceChange}
              />
            </label>

            <label className="settings-option">
              <span>
                <strong>SMS notifications</strong>
                <small>Receive reminders through text messages.</small>
              </span>

              <input
                type="checkbox"
                name="smsNotifications"
                checked={preferences.smsNotifications}
                onChange={handlePreferenceChange}
              />
            </label>
          </div>

          <button
            type="button"
            className="feature-primary-button"
            onClick={handleSavePreferences}
          >
            Save preferences
          </button>
        </section>

        <section className="settings-section">
          <div className="settings-section-heading">
            <h2>Account security</h2>
            <p>Update your account password.</p>
          </div>

          <form
            className="settings-password-form"
            onSubmit={handlePasswordSubmit}
          >
            <div className="settings-form-group">
              <label htmlFor="currentPassword">
                Current password
              </label>
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                required
              />
            </div>

            <div className="settings-form-group">
              <label htmlFor="newPassword">New password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <div className="settings-form-group">
              <label htmlFor="confirmPassword">
                Confirm new password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <button
              type="submit"
              className="feature-primary-button"
            >
              Change password
            </button>
          </form>

          <FeatureNotice>
            Password changes require a secure backend authentication
            service and are not yet available.
          </FeatureNotice>
        </section>

        <section className="settings-section">
          <div className="settings-section-heading">
            <h2>Legal information</h2>
            <p>Review the policies governing your use of Jali Mama.</p>
          </div>

          <div className="settings-legal-links">
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/terms-and-conditions">
              Terms and conditions
            </a>
          </div>
        </section>
      </div>
    </FeaturePage>
  );
}

export default Settings;
