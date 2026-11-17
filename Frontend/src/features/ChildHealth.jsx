
import { useState } from "react";

import FeaturePage from "../components/FeaturePage";
import FeatureNotice from "../components/FeatureNotice";
import ChildProfiles from "../child-health/ChildProfiles";

import GrowthMonitoring from "./GrowthMonitoring";
import HealthRecords from "./HealthRecords";
import Immunization from "./Immunization";

import "../styles/features.css";

const demoChildren = [
  {
    id: "demo-child-1",
    firstName: "Amina",
    lastName: "Example",
    dateOfBirth: "2024-06-15",
    sex: "Female",
    relationship: "Mother",
  },
  {
    id: "demo-child-2",
    firstName: "Brian",
    lastName: "Example",
    dateOfBirth: "2025-02-10",
    sex: "Male",
    relationship: "Father",
  },
];

function ChildHealth() {
  const [children, setChildren] = useState(demoChildren);

  const [selectedChildId, setSelectedChildId] = useState(
    demoChildren[0]?.id ?? null
  );

  function handleChildAdded(newChild) {
    setChildren((previousChildren) => [
      ...previousChildren,
      newChild,
    ]);

    // Automatically open the newly created child's profile.
    setSelectedChildId(newChild.id);
  }

  return (
    <FeaturePage
      title="Child Health"
      description="Manage your children's growth, immunisation, and health records."
    >
      <div className="feature-content-stack">

        {/* <FeatureNotice>
          You are currently using demonstration data.
          Child profiles are stored temporarily in frontend
          state and will be connected to your account through
          the backend API.
        </FeatureNotice> */}

        <ChildProfiles
          children={children}
          selectedChildId={selectedChildId}
          onSelectChild={setSelectedChildId}
          onChildAdded={handleChildAdded}
        />

        {selectedChildId && (
          <>
            <GrowthMonitoring />
            <Immunization />
            <HealthRecords />
          </>
        )}

      </div>
    </FeaturePage>
  );
}

export default ChildHealth;
