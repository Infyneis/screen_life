"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function FloatingLocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
      aria-label={locale === "en" ? "Switch to French" : "Switch to English"}
    >
      <Avatar className="h-14 w-14 shadow-lg border-2 border-background cursor-pointer">
        <AvatarFallback className="text-2xl bg-white dark:bg-zinc-900">
          {locale === "en" ? "🇫🇷" : "🇬🇧"}
        </AvatarFallback>
      </Avatar>
    </button>
  );
}
