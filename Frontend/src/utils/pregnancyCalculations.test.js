import assert from "node:assert/strict";
import test from "node:test";
import { getPregnancyDetails } from "./pregnancyCalculations.js";

const DAY_IN_MILLISECONDS = 86400000;

function dateDaysAgo(days) {
  const today = new Date();
  return new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
      days * DAY_IN_MILLISECONDS
  )
    .toISOString()
    .slice(0, 10);
}

test("pregnancy calculation rejects missing, malformed, impossible, and future dates", () => {
  assert.equal(getPregnancyDetails(null), null);
  assert.equal(getPregnancyDetails("2026/01/01"), null);
  assert.equal(getPregnancyDetails("2026-02-30"), null);
  assert.equal(getPregnancyDetails("2999-01-01"), null);
});

test("pregnancy calculation returns weeks, trimester, and estimated due date", () => {
  const lmp = dateDaysAgo(70);
  const details = getPregnancyDetails(lmp);
  const expectedDueDate = new Date(`${lmp}T00:00:00.000Z`);
  expectedDueDate.setUTCDate(expectedDueDate.getUTCDate() + 280);

  assert.equal(details.weeks, 10);
  assert.equal(details.days, 0);
  assert.equal(details.trimester, "First Trimester");
  assert.equal(details.remainingWeeks, 30);
  assert.equal(details.isComplete, false);
  assert.equal(
    details.dueDate.toISOString().slice(0, 10),
    expectedDueDate.toISOString().slice(0, 10)
  );
});

test("pregnancy trimester boundaries and completed estimates are consistent", () => {
  assert.equal(getPregnancyDetails(dateDaysAgo(98)).trimester, "Second Trimester");
  assert.equal(getPregnancyDetails(dateDaysAgo(196)).trimester, "Third Trimester");

  const pastDue = getPregnancyDetails(dateDaysAgo(281));
  assert.equal(pastDue.isComplete, true);
  assert.equal(pastDue.isPastDue, true);
  assert.equal(pastDue.percentage, 100);
});
