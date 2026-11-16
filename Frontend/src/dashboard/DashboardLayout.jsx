import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import Sidebar from "../layout/Sidebar";
import Maincontent from "../layout/Maincontent";
import "../styles/dashboardlayout.css";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <button
            type="button"
            className="dashboard-menu-button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open navigation"
            aria-expanded={isSidebarOpen}
            aria-controls="dashboard-navigation"
          >
            <Menu size={23} />
          </button>

          <div className="dashboard-topbar-right">
            <div className="dashboard-user">
              <div className="dashboard-user-avatar">JM</div>
              <div className="dashboard-user-info">
                <strong>Preview</strong>
                <span>Guest access</span>
              </div>
            </div>
          </div>
        </header>

        <Maincontent>
          {/* <p className="preview-notice" role="note">
            Preview only. This dashboard is not protected by authentication,
            and health records are not saved.
          </p> */}
          <Outlet />
        </Maincontent>
      </div>
    </div>
  );
}

export default DashboardLayout;