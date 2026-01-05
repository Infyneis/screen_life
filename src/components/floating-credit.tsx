"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function FloatingCredit() {
  const t = useTranslations("credit");

  return (
    <motion.div
      className="fixed top-4 left-4 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <Card className="shadow-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardContent className="p-3 flex items-center gap-3">
          <Avatar className="h-10 w-10 ring-2 ring-primary/20">
            <AvatarImage src="/avatar.png" alt="Samy DJEMILI" />
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">SD</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-semibold text-sm">Samy DJEMILI</span>
            <span className="text-xs text-muted-foreground">@Infyneis</span>
          </div>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="ml-1 gap-1 text-xs h-8"
          >
            <a
              href="https://www.samy.djemili.infyneis.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("portfolio")}
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
