const PREGNANCY_DURATION_DAYS = 280;
const MILLISECONDS_PER_DAY = 86400000;

export function getPregnancyDetails(lastMenstrualPeriod) {
  if (
    typeof lastMenstrualPeriod !== "string" ||
    !lastMenstrualPeriod
  ) {
    return null;
  }

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(
    lastMenstrualPeriod
  );

  if (!match) return null;

  const [, year, month, day] = match;
  const startDate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day))
  );

  if (
    startDate.getUTCFullYear() !== Number(year) ||
    startDate.getUTCMonth() !== Number(month) - 1 ||
    startDate.getUTCDate() !== Number(day)
  ) {
    return null;
  }

  const today = new Date();
  const todayUTC = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const elapsedDays = Math.floor(
    (todayUTC - startDate.getTime()) / MILLISECONDS_PER_DAY
  );

  if (elapsedDays < 0) return null;

  const completedDays = Math.min(
    elapsedDays,
    PREGNANCY_DURATION_DAYS
  );
  const weeks = Math.floor(completedDays / 7);
  const days = completedDays % 7;
  const remainingDays = Math.max(
    PREGNANCY_DURATION_DAYS - elapsedDays,
    0
  );

  let trimester = "First Trimester";
  if (weeks >= 14 && weeks <= 27) {
    trimester = "Second Trimester";
  } else if (weeks >= 28) {
    trimester = "Third Trimester";
  }

  return {
    weeks,
    days,
    remainingWeeks: Math.floor(remainingDays / 7),
    remainingDays: remainingDays % 7,
    percentage: Math.min(
      Math.round(
        (completedDays / PREGNANCY_DURATION_DAYS) * 100
      ),
      100
    ),
    trimester,
    dueDate: new Date(
      startDate.getTime() +
        PREGNANCY_DURATION_DAYS * MILLISECONDS_PER_DAY
    ),
    isPastDue: elapsedDays > PREGNANCY_DURATION_DAYS,
    isComplete: elapsedDays >= PREGNANCY_DURATION_DAYS,
  };
}
