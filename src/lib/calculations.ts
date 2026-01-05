export interface ScreenTimeStats {
  hoursPerWeek: number;
  daysPerYear: number;
  freeTimePercent: number;
}

const FREE_TIME_HOURS_PER_DAY = 8;

export function calculateScreenTimeStats(
  dailyHours: number,
  dailyMinutes: number
): ScreenTimeStats {
  const totalDailyHours = dailyHours + dailyMinutes / 60;

  const hoursPerWeek = Math.round(totalDailyHours * 7 * 10) / 10;
  const daysPerYear = Math.round((totalDailyHours * 365) / 24 * 10) / 10;
  const freeTimePercent = Math.round((totalDailyHours / FREE_TIME_HOURS_PER_DAY) * 100);

  return {
    hoursPerWeek,
    daysPerYear,
    freeTimePercent,
  };
}

export type MessageLevel = "none" | "low" | "medium" | "high" | "extreme";

export function getMessageLevel(freeTimePercent: number): MessageLevel {
  if (freeTimePercent === 0) return "none";
  if (freeTimePercent <= 25) return "low";
  if (freeTimePercent <= 50) return "medium";
  if (freeTimePercent <= 75) return "high";
  return "extreme";
}
