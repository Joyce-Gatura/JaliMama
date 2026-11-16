
import { useState } from "react";
import { MapPin, Search, Hospital, HeartPulse } from "lucide-react";
import FeaturePage from "../components/FeaturePage";
import "../styles/healthfacilities.css";

const countyData = {
  Nakuru: [
    "Bahati",
    "Gilgil",
    "Kuresoi North",
    "Kuresoi South",
    "Molo",
    "Naivasha",
    "Nakuru East",
    "Nakuru West",
    "Njoro",
    "Rongai",
    "Subukia",
  ],
  Nyandarua: [
    "Kinangop",
    "Kipipiri",
    "Ndaragwa",
    "Ol Joro Orok",
    "Ol Kalou",
  ],
  Nyeri: [
    "Kieni East",
    "Kieni West",
    "Mathira East",
    "Mathira West",
    "Mukurwe-ini",
    "Nyeri Central",
    "Othaya",
    "Tetu",
  ],
};

// Synthetic records for frontend development only.
// Replace these with verified records from the official facility registry.



export const facilities = [
  // =========================
  // NAKURU COUNTY
  // =========================
  {
    id: "nakuru-001",
    name: "Bahati Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Bahati",
    locationSubCounty: "Bahati",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: "+254701779094",
    address: "Maili Kumi, Bahati",
    isReferralOption: false,
  },
  {
    id: "nakuru-002",
    name: "Gilgil Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Gilgil",
    locationSubCounty: "Gilgil",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Gilgil",
    isReferralOption: false,
  },
  {
    id: "nakuru-003",
    name: "Olenguruone Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Kuresoi North",
    locationSubCounty: "Kuresoi North",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Olenguruone",
    isReferralOption: false,
  },
  {
    id: "nakuru-004",
    name: "Keringet Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Kuresoi South",
    locationSubCounty: "Kuresoi South",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Keringet",
    isReferralOption: false,
  },
  {
    id: "nakuru-005",
    name: "Molo Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Molo",
    locationSubCounty: "Molo",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Molo Town",
    isReferralOption: false,
  },
  {
    id: "nakuru-006",
    name: "Naivasha Sub-County Referral Hospital",
    county: "Nakuru",
    subCounty: "Naivasha",
    locationSubCounty: "Naivasha",
    facilityType: "Sub-County Referral Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Kenyatta Avenue, Naivasha",
    isReferralOption: false,
  },
  {
    id: "nakuru-007",
    name: "Bondeni Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Nakuru East",
    locationSubCounty: "Nakuru East",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Nakuru Town",
    isReferralOption: false,
  },
  {
    id: "nakuru-008",
    name: "Nakuru County Referral and Teaching Hospital",
    county: "Nakuru",
    subCounty: "Nakuru West",
    locationSubCounty: "Nakuru West",
    facilityType: "County Referral Hospital",
    level: 6,
    ownership: "Public",
    phone: null,
    address: "London Ward, Nakuru",
    isReferralOption: false,
  },
  {
    id: "nakuru-009",
    name: "Njoro Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Njoro",
    locationSubCounty: "Njoro",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Njoro",
    isReferralOption: false,
  },
  {
    id: "nakuru-010",
    name: "Sisto Mazzoldi Hospital",
    county: "Nakuru",
    subCounty: "Rongai",
    locationSubCounty: "Rongai",
    facilityType: "Hospital",
    level: null,
    ownership: "Faith-based",
    phone: null,
    address: "Rongai",
    isReferralOption: false,
  },
  {
    id: "nakuru-011",
    name: "Subukia Sub-County Hospital",
    county: "Nakuru",
    subCounty: "Subukia",
    locationSubCounty: "Subukia",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: null,
    address: "Subukia",
    isReferralOption: false,
  },

  // =========================
  // NYANDARUA COUNTY
  // =========================
  {
    id: "nyandarua-001",
    name: "Engineer County Hospital",
    county: "Nyandarua",
    subCounty: "Kinangop",
    locationSubCounty: "Kinangop",
    facilityType: "County Hospital",
    level: 4,
    ownership: "Public",
    phone: "+254790294395",
    address: "Engineer Town",
    isReferralOption: false,
  },
  {
    id: "nyandarua-002",
    name: "J.M. Kariuki County Referral Hospital",
    county: "Nyandarua",
    subCounty: "Kipipiri",
    locationSubCounty: "Ol Kalou",
    facilityType: "County Referral Hospital",
    level: 4,
    ownership: "Public",
    phone: "+254726204466",
    address: "Ol Kalou",
    isReferralOption: true,
  },
  {
    id: "nyandarua-003",
    name: "J.M. Kariuki County Referral Hospital",
    county: "Nyandarua",
    subCounty: "Ndaragwa",
    locationSubCounty: "Ol Kalou",
    facilityType: "County Referral Hospital",
    level: 4,
    ownership: "Public",
    phone: "+254726204466",
    address: "Ol Kalou",
    isReferralOption: true,
  },
  {
    id: "nyandarua-004",
    name: "Citymed Cottage Hospital",
    county: "Nyandarua",
    subCounty: "Ol Kalou",
    locationSubCounty: "Ol Kalou",
    facilityType: "Hospital",
    level: 4,
    ownership: "Private",
    phone: null,
    address: "Mirangine area",
    isReferralOption: false,
  },
  {
    id: "nyandarua-005",
    name: "J.M. Kariuki County Referral Hospital",
    county: "Nyandarua",
    subCounty: "Ol Joro Orok",
    locationSubCounty: "Ol Kalou",
    facilityType: "County Referral Hospital",
    level: 4,
    ownership: "Public",
    phone: "+254726204466",
    address: "Ol Kalou",
    isReferralOption: true,
  },

  // =========================
  // NYERI COUNTY
  // =========================
  {
    id: "nyeri-001",
    name: "St. John's Divine Nursing Home",
    county: "Nyeri",
    subCounty: "Kieni East",
    locationSubCounty: "Kieni East",
    facilityType: "Hospital",
    level: 4,
    ownership: "Private",
    phone: null,
    address: "Kieni East",
    isReferralOption: false,
  },
  {
    id: "nyeri-002",
    name: "Mary Immaculate Hospital",
    county: "Nyeri",
    subCounty: "Kieni West",
    locationSubCounty: "Kieni West",
    facilityType: "Hospital",
    level: 4,
    ownership: "Faith-based",
    phone: "+254723576106",
    address: "Mweiga",
    isReferralOption: false,
  },
  {
    id: "nyeri-003",
    name: "Karatina Sub-County Hospital",
    county: "Nyeri",
    subCounty: "Mathira East",
    locationSubCounty: "Mathira East",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: "+254721600982",
    address: "Karatina",
    isReferralOption: false,
  },
  {
    id: "nyeri-004",
    name: "PCEA Tumu Tumu Mission Hospital",
    county: "Nyeri",
    subCounty: "Mathira West",
    locationSubCounty: "Mathira West",
    facilityType: "Mission Hospital",
    level: 5,
    ownership: "Faith-based",
    phone: "+254720948474",
    address: "Tumutumu",
    isReferralOption: false,
  },
  {
    id: "nyeri-005",
    name: "Mukurwe-ini Sub-County Hospital",
    county: "Nyeri",
    subCounty: "Mukurwe-ini",
    locationSubCounty: "Mukurwe-ini",
    facilityType: "Sub-County Hospital",
    level: 4,
    ownership: "Public",
    phone: "+254720747323",
    address: "Mukurwe-ini",
    isReferralOption: false,
  },
  {
    id: "nyeri-006",
    name: "Nyeri County Referral Hospital",
    county: "Nyeri",
    subCounty: "Nyeri Central",
    locationSubCounty: "Nyeri Central",
    facilityType: "County Referral Hospital",
    level: 5,
    ownership: "Public",
    phone: "+254724249693",
    address: "Nyeri Town",
    isReferralOption: false,
  },
  {
    id: "nyeri-007",
    name: "Mwai Kibaki Referral Hospital",
    county: "Nyeri",
    subCounty: "Othaya",
    locationSubCounty: "Othaya",
    facilityType: "National Referral Hospital",
    level: 6,
    ownership: "Public",
    phone: null,
    address: "Othaya",
    isReferralOption: false,
  },
  {
    id: "nyeri-008",
    name: "Nyeri County Referral Hospital",
    county: "Nyeri",
    subCounty: "Tetu",
    locationSubCounty: "Nyeri Central",
    facilityType: "County Referral Hospital",
    level: 5,
    ownership: "Public",
    phone: "+254724249693",
    address: "Nyeri Town",
    isReferralOption: true,
  },
];





function HealthcareFacilities() {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedSubCounty, setSelectedSubCounty] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const subCounties = countyData[selectedCounty] || [];


  const filteredFacilities =
  selectedCounty && selectedSubCounty
    ? facilities.filter((facility) => {
        const matchesLocation =
          facility.county === selectedCounty &&
          facility.subCounty === selectedSubCounty;

        const matchesSearch = facility.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        return matchesLocation && matchesSearch;
      })
    : [];

  


  const handleCountyChange = (event) => {
    setSelectedCounty(event.target.value);
    setSelectedSubCounty("");
    setSearchTerm("");
  };

  
   return (
  <FeaturePage
    title="Health Facilities"
    description="Find healthcare facilities within your selected county and sub-county."
  >
    <main className="facilities-page">
     

      <section className="facility-search-panel">
        <div className="facility-filter">
          <label htmlFor="county">Select County</label>

          <select
            id="county"
            value={selectedCounty}
            onChange={handleCountyChange}
          >
            <option value="">--Choose a county--</option>

            {Object.keys(countyData)
              .sort((a, b) => a.localeCompare(b))
              .map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
          </select>
        </div>

        <div className="facility-filter">
          <label htmlFor="subCounty">Select Sub-county</label>

          <select
            id="subCounty"
            value={selectedSubCounty}
            onChange={(event) =>
              setSelectedSubCounty(event.target.value)
            }
            disabled={!selectedCounty}
          >
            <option value="">
              {selectedCounty
                ? "--Choose a sub-county--"
                : "Select a county first"}
            </option>

            {subCounties.map((subCounty) => (
              <option key={subCounty} value={subCounty}>
                {subCounty}
              </option>
            ))}
          </select>
        </div>
      </section>

      {selectedSubCounty && (
        <section className="facility-results">
          <div className="facility-results-heading">
            <div>
              {/* <h2>Maternity Facilities</h2> */}
              <p>
                {selectedSubCounty}, {selectedCounty}
              </p>
            </div>

            <span className="facility-count">
              {filteredFacilities.length} found
            </span>
          </div>

          {/* <div className="facility-search-input">
            <Search size={18} />

            <input
              type="search"
              placeholder="Search facility name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div> */}

          {filteredFacilities.length > 0 ? (
            <div className="facility-list">
              {filteredFacilities.map((facility) => (


<article className="facility-card" key={facility.id}>
  <div className="facility-details">
    <h3>{facility.name}</h3>

    <span className="facility-type">
      {facility.facilityType}
      {facility.level ? ` · Level ${facility.level}` : ""}
    </span>

    <p>
      <strong>-</strong> {facility.ownership}
    </p>

    <p>
      <strong>-</strong> {facility.locationSubCounty}
    </p>

    {facility.isReferralOption && (
      <p className="referral-note">
        Referral option — located outside your selected sub-county.
      </p>
    )}

    <p>
      <strong>-</strong>{" "}
      {facility.phone ? (
        <a href={`tel:${facility.phone}`}>
          {facility.phone}
        </a>
      ) : (
        "Contact not published"
      )}
    </p>
  </div>
</article>
                


              ))}
            </div>
          ) : (

<div className="facility-empty-state">
  <Hospital size={36} />

  <h3>No verified maternity facilities found</h3>

  <p>
    We currently do not have a verified maternity facility
    listed for {selectedSubCounty}, {selectedCounty}.
    Please check again later or contact your local health office.
  </p>
</div>


         
          )}
        </section>
      )}

      {/* {!selectedCounty && (
        <div className="facility-initial-state">
          <MapPin size={30} />
          <h3>Find maternity care near you</h3>
          <p>Select a county to begin your search.</p>
        </div>
      )} */}
    </main>
    </FeaturePage>
  );
}

export default HealthcareFacilities;
