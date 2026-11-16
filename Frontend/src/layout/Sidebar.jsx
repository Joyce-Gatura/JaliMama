import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Baby,
  HeartPulse,
  Bot,
  Bell,
  CalendarDays,
  BookOpen,
  UserRound,
  Settings,
  Hospital,
  X,
} from "lucide-react";

import "../styles/sidebar.css";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "My Pregnancy",
    path: "/dashboard/pregnancy",
    icon: HeartPulse,
  },
  {
    label: "Child Health",
    path: "/dashboard/child-health",
    icon: Baby,
  },
  {
    label: "AI Health Assistant",
    path: "/dashboard/ai-assistant",
    icon: Bot,
  },
  {
    label: "Clinic & Appointments",
    path: "/dashboard/appointments",
    icon: CalendarDays,
  },
  {
    label: "Reminders",
    path: "/dashboard/reminders",
    icon: Bell,
  },
  {
    label: "Health Resources",
    path: "/dashboard/health-education",
    icon: BookOpen,
  },
  {
    label: "Health Facilities",
    path: "/dashboard/health-facilities",
    icon: Hospital,
  }


];

const accountItems = [
  {
    label: "My Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
          icon: Settings,
  },
];

function Sidebar({ isOpen, onClose }) {
  const renderNavigationItem = (item) => {
    const Icon = item.icon;

    return (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.end}
        className={({ isActive }) =>
          `sidebar-link ${isActive ? "active" : ""}`
        }
        onClick={onClose}
      >
        <Icon size={19} strokeWidth={1.8} />
        <span>{item.label}</span>
      </NavLink>
    );
  };

  return (
    <>
      <aside
        id="dashboard-navigation"
        className={`dashboard-sidebar ${isOpen ? "sidebar-open" : ""}`}
      >
        <div className="sidebar-header">
          <NavLink to="/dashboard" className="sidebar-brand" onClick={onClose}>
            <span className="sidebar-logo">JM</span>
            <span>Jali Mama</span>
          </NavLink>


          <button
            type="button"
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        <div className="sidebar-navigation">
          <p className="sidebar-section-title">MAIN MENU</p>

          <nav className="sidebar-nav" aria-label="Main navigation">
            {navigationItems.map(renderNavigationItem)}
          </nav>

          <div className="sidebar-divider" />

          <p className="sidebar-section-title">ACCOUNT</p>

          <nav className="sidebar-nav" aria-label="Account navigation">
            {accountItems.map(renderNavigationItem)}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-help-card">
            <div className="sidebar-help-icon">
              <HeartPulse size={19} />
            </div>
            <div>
              <h4>We're here for you</h4>
              <p><strong>Has an Emergency? Call 0800 722 023 or WhatsApp 0709 819 001.</strong></p>
            </div>
          </div>
          <p className="sidebar-auth-note">
            Account sign-in and sign-out are not connected.
          </p>
        </div>
      </aside>

      {isOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={onClose}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
}

export default Sidebar;