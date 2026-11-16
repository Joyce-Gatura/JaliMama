import { useState } from "react";
import FeaturePage from "../components/FeaturePage";
import InputField from "../components/Inputs";
import Button from "../components/common/Button";
import PregnancyProgress from "./PregnancyProgress";
import "../styles/features.css";

function getTodayDateValue() {
  const today = new Date();
  const offset = today.getTimezoneOffset() * 60000;
  return new Date(today.getTime() - offset).toISOString().slice(0, 10);
}

function PregnancyTracker() {
  const [lastMenstrualPeriod, setLastMenstrualPeriod] = useState("");
  const [calculationDate, setCalculationDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCalculationDate(lastMenstrualPeriod);
  }

  return (
    <FeaturePage
      title="My Pregnancy"
      description="Get an estimated pregnancy timeline from your last menstrual period."
    >
      <div className="feature-content-stack">
        <section className="feature-panel">
          {/* <h2>Pregnancy date estimate</h2>
          <p>
            This calculator is for information only. A healthcare
            provider's confirmed dating should take precedence.
          </p> */}
          <form className="feature-form" onSubmit={handleSubmit}>
            <InputField
              id="last-menstrual-period"
              name="lastMenstrualPeriod"
              label="First day of your last menstrual period"
              type="date"
              value={lastMenstrualPeriod}
              max={getTodayDateValue()}
              onChange={(event) =>
                setLastMenstrualPeriod(event.target.value)
              }
              required
            />
            <Button type="submit">Calculate estimate</Button>
          </form>
        </section>

        {calculationDate && (
          <PregnancyProgress lastMenstrualPeriod={calculationDate} />
        )}

        {/* <p className="feature-data-disclaimer">
          This estimate is held only in this page's temporary state. It is
          not saved to an account or shared with a provider.
        </p> */}
      </div>
    </FeaturePage>
  );
}

export default PregnancyTracker;
