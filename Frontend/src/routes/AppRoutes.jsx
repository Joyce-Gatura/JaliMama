
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LandPage = lazy(() => import("../publicpage/LandPage"));
const Login = lazy(() => import("../authpages/Login"));
const Register = lazy(() => import("../authpages/Register"));
const ForgotPassword = lazy(() => import("../authpages/ForgotPassword"));
const ResetPassword = lazy(() => import("../authpages/ResetPassword"));
const LegalInformation = lazy(() => import("../authpages/LegalInformation"));

const DashboardLayout = lazy(() => import("../dashboard/DashboardLayout"));
const Dashboard = lazy(() => import("../features/Dashboard"));
const DashboardFeaturePage = lazy(
  () => import("../dashboard/DashboardFeaturedPage")
);

const AiHealthAssistant = lazy(
  () => import("../features/AiHealthAssistant")
);
const Appointments = lazy(() => import("../features/Appointments"));
const ChildHealth = lazy(() => import("../features/ChildHealth"));
const HealthResources = lazy(() => import("../features/HealthResources"));
const HealthFacilities = lazy(
  () => import("../features/HealthFacilities")
);
const PregnancyTracker = lazy(
  () => import("../features/PregnancyTracker")
);
const Profile = lazy(() => import("../features/Profile"));
const Reminders = lazy(() => import("../features/Reminders"));
const Settings = lazy(() => import("../features/Settings"));

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <p className="app-loading" role="status">
          Loading page…
        </p>
      }
    >
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/terms" element={<LegalInformation />} />
        <Route path="/privacy" element={<LegalInformation />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="pregnancy" element={<PregnancyTracker />} />
          <Route path="child-health" element={<ChildHealth />} />

          <Route path="health-facilities" element={<HealthFacilities />} />

          <Route path="ai-assistant" element={<AiHealthAssistant />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="health-education" element={<HealthResources />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

          {/* Dashboard fallback */}
          <Route path="*" element={<DashboardFeaturePage />} />
        </Route>

        {/* Application fallback */}
        <Route path="*" element={<DashboardFeaturePage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
