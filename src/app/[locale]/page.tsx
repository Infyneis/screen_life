"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScreenTimeInput } from "@/components/screen-time-input";
import { StatsDisplay } from "@/components/stats-display";
import { FloatingLocaleSwitcher } from "@/components/floating-locale-switcher";
import { FloatingCredit } from "@/components/floating-credit";
import { calculateScreenTimeStats, getMessageLevel } from "@/lib/calculations";
import { ClockIcon, type ClockIconHandle } from "@/components/ui/clock";
import { HourglassIcon, type HourglassIconHandle } from "@/components/ui/hourglass";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("hero");
  const tCta = useTranslations("cta");

  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(0);

  const clockRef = useRef<ClockIconHandle>(null);
  const hourglassRef = useRef<HourglassIconHandle>(null);

  const stats = calculateScreenTimeStats(hours, minutes);
  const messageLevel = getMessageLevel(stats.freeTimePercent);

  useEffect(() => {
    clockRef.current?.startAnimation();
    const timer = setTimeout(() => {
      clockRef.current?.stopAnimation();
    }, 1000);
    return () => clearTimeout(timer);
  }, [hours, minutes]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/illustrations/screen-time.svg"
              alt="Screen time illustration"
              width={300}
              height={250}
              className="opacity-90"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <ClockIcon ref={clockRef} size={32} className="text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScreenTimeInput
                hours={hours}
                minutes={minutes}
                onHoursChange={setHours}
                onMinutesChange={setMinutes}
              />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <StatsDisplay stats={stats} messageLevel={messageLevel} />
          </div>
        </div>

        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="py-8 text-center">
            <div className="flex justify-center mb-4">
              <HourglassIcon ref={hourglassRef} size={40} className="text-primary/70" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{tCta("title")}</h2>
            <p className="text-muted-foreground">{tCta("description")}</p>
          </CardContent>
        </Card>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>Take control of your time. Live more.</p>
      </footer>

      <FloatingCredit />
      <FloatingLocaleSwitcher />
    </div>
  );
}
