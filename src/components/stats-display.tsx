"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { type ScreenTimeStats, type MessageLevel } from "@/lib/calculations";
import { useEffect, useState } from "react";

interface StatsDisplayProps {
  stats: ScreenTimeStats;
  messageLevel: MessageLevel;
}

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 500;
    const startTime = Date.now();
    const startValue = displayValue;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(startValue + (value - startValue) * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span className="tabular-nums">{displayValue.toFixed(decimals)}</span>;
}

export function StatsDisplay({ stats, messageLevel }: StatsDisplayProps) {
  const t = useTranslations("stats");
  const tMessage = useTranslations("message");

  const getMessageColor = (level: MessageLevel) => {
    switch (level) {
      case "none":
        return "text-muted-foreground";
      case "low":
        return "text-green-600 dark:text-green-400";
      case "medium":
        return "text-yellow-600 dark:text-yellow-400";
      case "high":
        return "text-orange-600 dark:text-orange-400";
      case "extreme":
        return "text-red-600 dark:text-red-400";
    }
  };

  const getPercentStyles = (percent: number) => {
    if (percent <= 25) return {
      card: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800",
      number: "text-green-600 dark:text-green-400",
      label: "text-green-600 dark:text-green-400",
    };
    if (percent <= 50) return {
      card: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800",
      number: "text-yellow-600 dark:text-yellow-400",
      label: "text-yellow-600 dark:text-yellow-400",
    };
    if (percent <= 75) return {
      card: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800",
      number: "text-orange-600 dark:text-orange-400",
      label: "text-orange-600 dark:text-orange-400",
    };
    return {
      card: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800",
      number: "text-red-600 dark:text-red-400",
      label: "text-red-600 dark:text-red-400",
    };
  };

  const percentStyles = getPercentStyles(stats.freeTimePercent);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <CardContent className="py-6 px-4 text-center flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-300">
              <AnimatedNumber value={stats.hoursPerWeek} decimals={1} />
            </div>
            <p className="text-sm font-bold uppercase text-blue-600 dark:text-blue-400 mt-1">
              {t("perWeek.unit")}
            </p>
            <p className="text-xs text-blue-500 dark:text-blue-500">
              {t("perWeek.label")}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <CardContent className="py-6 px-4 text-center flex flex-col items-center justify-center min-h-[140px]">
            <div className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-300">
              <AnimatedNumber value={stats.daysPerYear} decimals={1} />
            </div>
            <p className="text-sm font-bold uppercase text-purple-600 dark:text-purple-400 mt-1">
              {t("perYear.unit")}
            </p>
            <p className="text-xs text-purple-500 dark:text-purple-500">
              {t("perYear.label")}
            </p>
          </CardContent>
        </Card>

        <Card className={percentStyles.card}>
          <CardContent className="py-6 px-4 text-center flex flex-col items-center justify-center min-h-[140px]">
            <div className={`text-3xl md:text-4xl font-bold ${percentStyles.number}`}>
              <AnimatedNumber value={stats.freeTimePercent} />%
            </div>
            <p className={`text-sm mt-1 ${percentStyles.label}`}>
              {t("freeTime.label")}
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-center text-muted-foreground">
        {t("note")}
      </p>

      <div className={`text-center text-lg font-medium p-4 rounded-lg bg-muted/50 ${getMessageColor(messageLevel)}`}>
        {tMessage(messageLevel)}
      </div>
    </div>
  );
}
