import { useState } from "react";
import "../App.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="settings-page">

      <div className="settings-card">

        <h1>Platform Settings</h1>

        <p className="settings-subtitle">
          Manage your platform preferences and account controls.
        </p>

        <div className="settings-section">

          <div className="setting-item">
            <div>
              <h3>Dark Mode</h3>

              <p>
                Enable dark theme across the platform.
              </p>
            </div>

            <button
              className="toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Enabled" : "Disabled"}
            </button>
          </div>

          <div className="setting-item">
            <div>
              <h3>Email Notifications</h3>

              <p>
                Receive overdue and activity alerts.
              </p>
            </div>

            <button className="toggle-btn">
              Enabled
            </button>
          </div>

          <div className="setting-item">
            <div>
              <h3>Auto Backup</h3>

              <p>
                Automatically backup library records.
              </p>
            </div>

            <button className="toggle-btn">
              Active
            </button>
          </div>

          <div className="setting-item">
            <div>
              <h3>Access Control</h3>

              <p>
                Restrict unauthorized platform access.
              </p>
            </div>

            <button className="toggle-btn">
              Protected
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;