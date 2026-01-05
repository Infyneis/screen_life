<p align="center">
  <img src="public/illustrations/screen-time.svg" alt="Screen Life" width="200" height="167" />
</p>

<h1 align="center">📱 Screen Life</h1>
<h3 align="center">How much of your life goes to screens?</h3>

<p align="center">
  <em>A gentle wake-up call to reclaim your time from endless scrolling</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/i18n-FR_|_EN-4ade80?style=flat-square" alt="i18n" />
  <img src="https://img.shields.io/badge/shadcn/ui-latest-000?style=flat-square" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Lucide_Animated-icons-ff6b6b?style=flat-square" alt="Lucide Animated" />
</p>

---

## ✨ Overview

Enter your daily screen time and discover the shocking reality:
- **How many hours per week** you spend on screens
- **How many days per year** vanish to digital distractions
- **What percentage of your free time** is consumed

The goal? A gentle push to help you **live more** and **scroll less**.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 📊 **Real-time Calculator** | Instant calculations as you adjust sliders |
| 🎨 **Animated Stats** | Smooth number animations with color-coded severity |
| 🌍 **Bilingual** | Full French & English support with floating flag switcher |
| ⏰ **Animated Icons** | Lucide animated clock and hourglass icons |
| 📱 **Responsive** | Beautiful on desktop and mobile |
| 🌙 **Dark Mode** | Automatic dark mode support |

---

## 🧮 How It Works

The app calculates based on **8 hours of free time per day**:
- 8 hours sleep
- 8 hours work/school
- **8 hours free time** ← your screen time eats into this

| Daily Screen Time | Weekly Hours | Yearly Days | Free Time % | Message |
|-------------------|--------------|-------------|-------------|---------|
| 1 hour | 7h | 15 days | 12.5% | 🟢 Healthy |
| 3 hours | 21h | 46 days | 37.5% | 🟡 Significant |
| 5 hours | 35h | 76 days | 62.5% | 🟠 A lot |
| 7+ hours | 49h+ | 106+ days | 87%+ | 🔴 Extreme |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| UI Components | shadcn/ui + Radix UI |
| Styling | Tailwind CSS 4 |
| Animations | Motion (Framer Motion) |
| Icons | Lucide Animated |
| i18n | next-intl |

---

## 📂 Project Structure

```
screen_life/
├── 📄 README.md
├── 📦 package.json
├── ⚙️ next.config.ts
├── 🎨 tailwind.config.ts
├── public/
│   └── illustrations/
│       └── 🖼️ screen-time.svg      # Main illustration
├── messages/
│   ├── 🇬🇧 en.json                  # English translations
│   └── 🇫🇷 fr.json                  # French translations
└── src/
    ├── app/
    │   ├── globals.css              # Global styles
    │   └── [locale]/
    │       ├── layout.tsx           # i18n-aware layout
    │       └── page.tsx             # Main calculator page
    ├── components/
    │   ├── ui/                      # shadcn + animated icons
    │   │   ├── slider.tsx
    │   │   ├── card.tsx
    │   │   ├── button.tsx
    │   │   ├── avatar.tsx
    │   │   ├── clock.tsx            # Animated clock icon
    │   │   └── hourglass.tsx        # Animated hourglass icon
    │   ├── screen-time-input.tsx    # Hours/minutes sliders
    │   ├── stats-display.tsx        # Animated stat cards
    │   └── floating-locale-switcher.tsx  # Flag avatar button
    ├── lib/
    │   ├── calculations.ts          # Screen time math
    │   └── utils.ts                 # shadcn utilities
    ├── i18n/
    │   ├── routing.ts               # Locale config
    │   ├── request.ts               # next-intl setup
    │   └── navigation.ts            # i18n navigation helpers
    └── middleware.ts                # Locale detection
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 🌍 Internationalization

The app supports **English** (default) and **French**.

- 🇬🇧 `/en` - English version
- 🇫🇷 `/fr` - French version
- Automatic language detection based on browser
- Floating flag button (bottom-right) to switch languages

### Adding a New Language

1. Create `messages/de.json` (copy from `en.json`)
2. Add `"de"` to `src/i18n/routing.ts` locales array
3. Translate all strings

---

## 🎨 Customization

### Replace the Illustration

Download a beautiful SVG from [Storyset.com](https://storyset.com):
1. Search for "Digital detox", "Time management", or "Social media"
2. Choose a style (Bro, Rafiki, Pana, etc.)
3. Download as SVG
4. Replace `public/illustrations/screen-time.svg`

### Adjust Free Time Assumption

Edit `src/lib/calculations.ts`:

```typescript
const FREE_TIME_HOURS_PER_DAY = 8; // Change this value
```

---

## 📊 Message Thresholds

| Free Time % | Level | Color |
|-------------|-------|-------|
| 0% | None | Gray |
| 1-25% | Low | 🟢 Green |
| 26-50% | Medium | 🟡 Yellow |
| 51-75% | High | 🟠 Orange |
| 76%+ | Extreme | 🔴 Red |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new languages
- Improve animations
- Suggest new features
- Fix bugs

---

## 📄 License

MIT

---

<div align="center">

**Take control of your time. Live more.** 🌱

Made with ❤️ by [Samy DJEMILI - Infyneis](https://www.samy.djemili.infyneis.com)

</div>
