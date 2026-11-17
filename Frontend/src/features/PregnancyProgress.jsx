
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import "../styles/pregnancyprogress.css";
import { getPregnancyDetails } from "../utils/pregnancyCalculations";
import { formatDate } from "../utils/dateFormatting";

function PregnancyProgress({ lastMenstrualPeriod }) {
  const pregnancy = getPregnancyDetails(lastMenstrualPeriod);

  // Display setup message when pregnancy information is unavailable.
  if (!pregnancy) {
    return (
      <section className="pregnancy-progress-card">
        <h2 className="pregnancy-progress-title">
          Your Pregnancy Progress
        </h2>

        <div className="pregnancy-empty-state">
          {/* <p>
            Add your last menstrual period (LMP) date to
            calculate your pregnancy progress.
          </p> */}

          <Link to="/dashboard/pregnancy">
            Set up pregnancy details →
          </Link>
        </div>
      </section>
    );
  }

  const chartData = [
    {
      name: "Completed",
      value: pregnancy.percentage,
    },
    {
      name: "Remaining",
      value: 100 - pregnancy.percentage,
    },
  ];

  return (
    <section className="pregnancy-progress-card">
      {/* Heading */}
   <h2 className="feature-section-title">
  My Pregnancy Progress
</h2>

      <div className="pregnancy-progress-layout">
        {/* Doughnut Chart */}
        <div
          className="pregnancy-chart"
          role="img"
          aria-label={`${pregnancy.weeks} weeks pregnant, ${pregnancy.percentage}% of a 40-week pregnancy completed`}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="76%"
                outerRadius="94%"
                startAngle={90}
                endAngle={-270}
                stroke="none"
                paddingAngle={0}
                isAnimationActive={true}
              >
                <Cell fill="var(--color-primary)" />
                <Cell fill="var(--color-primary-soft)" />
              </Pie>

              <Tooltip
                formatter={(value) => [
                  `${value}%`,
                  "Pregnancy progress",
                ]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Centre Label */}
          <div className="pregnancy-chart-label">
            <strong>{pregnancy.weeks}</strong>
            <span>Weeks</span>
          </div>
        </div>

        {/* Pregnancy Information */}
        <div className="pregnancy-progress-info">
          <span className="pregnancy-trimester">
            {pregnancy.trimester}
          </span>

          <h3>
            {pregnancy.isPastDue
              ? "Estimated due date has passed"
              : pregnancy.isComplete
                ? "Estimated due date reached"
                : "Your baby is growing!"}
          </h3>

          <p>
            {pregnancy.isComplete
              ? "Please follow up with your healthcare provider."
              : `${pregnancy.remainingWeeks} weeks and ${pregnancy.remainingDays} days remaining`}
          </p>

          <p>Estimated due date: {formatDate(pregnancy.dueDate)}</p>
          <p className="pregnancy-estimate-note">
            This is an estimate based on your last menstrual period, not a
            clinical assessment.
          </p>

          <Link
            to="/dashboard/pregnancy"
            className="pregnancy-view-details"
          >
            View Details <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PregnancyProgress;
