"use client";

import { useTranslations } from "next-intl";
import { Slider } from "@/components/ui/slider";

interface ScreenTimeInputProps {
  hours: number;
  minutes: number;
  onHoursChange: (hours: number) => void;
  onMinutesChange: (minutes: number) => void;
}

export function ScreenTimeInput({
  hours,
  minutes,
  onHoursChange,
  onMinutesChange,
}: ScreenTimeInputProps) {
  const t = useTranslations("input");

  return (
    <div className="w-full space-y-8">
      <label className="block text-lg font-medium text-center text-foreground/80">
        {t("label")}
      </label>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{t("hours")}</span>
            <span className="text-2xl font-bold tabular-nums">{hours}h</span>
          </div>
          <Slider
            value={[hours]}
            onValueChange={([value]) => onHoursChange(value)}
            max={12}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>6</span>
            <span>12</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{t("minutes")}</span>
            <span className="text-2xl font-bold tabular-nums">{minutes}m</span>
          </div>
          <Slider
            value={[minutes]}
            onValueChange={([value]) => onMinutesChange(value)}
            max={55}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>30</span>
            <span>55</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <span className="text-4xl font-bold">
          {hours}h{minutes.toString().padStart(2, "0")}m
        </span>
        <span className="text-muted-foreground ml-2">/ {t("label").toLowerCase()}</span>
      </div>
    </div>
  );
}
