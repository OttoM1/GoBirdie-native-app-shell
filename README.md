# GoBirdie — Native App Shell

https://gobirdieapp.com

Beta-grade **Expo / React Native** client for GoBirdie: golf intelligence, shot physics, and caddie systems.

> **Note:** The git root may be named `Metro-Bundler`; the app lives in `gobirdiex/`. Run all commands from this directory.

---

## Table of contents

- [Overview](#overview)
- [Core systems](#core-systems)
- [Stack](#stack)
- [Repository structure](#repository-structure)
- [Getting started](#getting-started)
- [Development](#development)
- [Architecture notes](#architecture-notes)
- [Platforms](#platforms)
- [Roadmap](#roadmap)
- [Security](#security)
- [License](#license)

---

## Overview

This is the public mobile client architecture behind **GoBirdie**.

The application combines:

- Custom golf ball-flight physics
- Environmental caddie calculations
- Adaptive practice systems
- Trackman-style shot profiling
- A modern React Native mobile stack built for production deployment

This repository focuses on the **mobile runtime**, **interface systems**, and **client-side infrastructure** used to power the GoBirdie experience.

---

## Core systems

### Golf physics engine

Custom RK4-based golf shot simulation with:

- Carry distance modeling
- Launch profile adjustments
- Spin and environmental calculations
- Trajectory calibration workflows
- Regression-tested physics outputs (Vitest goldens)

//link will be here

### Caddie systems

Club recommendations based on:

- Wind, temperature, lie, and elevation
- Player-specific carry profiles and Trackman-style launch overrides

### Adaptive practice

Practice drills generate:

- Skill progression data
- Drill aggregates
- Player performance history synced through Supabase

### Mobile infrastructure

Production-oriented React Native architecture with:

- Expo Router
- Typed React contexts
- Deep linking and magic-link auth
- Offline persistence (AsyncStorage)
- Modular feature organization

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Expo SDK 54 |
| Runtime | React Native 0.81 |
| Language | TypeScript (strict) |
| Routing | Expo Router 6 |
| Styling | NativeWind 4 + Tailwind CSS |
| State | Context-based architecture |
| Backend | Supabase (auth + Postgres) |
| Testing | Vitest (Node) |
| Animation | Reanimated + Gesture Handler |
| Graphics | React Native Skia *(dependency; optional)* |
| Weather | Open-Meteo (no API key) |
| Auth | Supabase magic links |

---

## Repository structure

When cloned from the monorepo-style root:

```text
Metro-Bundler/
├── README.md              # Product vision
└── gobirdiex/             # ← you are here
    ├── app/                 # Expo Router screens + lib
    ├── components/
    ├── hooks/
    ├── packages/
    │   └── golf-physics/    # Shared physics package
    ├── scripts/             # Goldens, lab sync
    ├── app.json
    ├── metro.config.js
    ├── babel.config.js
    ├── tailwind.config.js
    ├── jaska.css            # NativeWind entry
    └── package.json
```

All application commands are executed from **`gobirdiex/`**.

---

## Getting started

### Prerequisites

- Node.js (LTS)
- npm
- [Expo CLI](https://docs.expo.dev/) workflow (`npx expo`)
- Xcode (iOS, macOS) and/or Android Studio (Android emulator)

### Install

```bash
cd gobirdiex
npm install
```

### Environment variables

Create a local environment file:

```bash
cp .env.example .env
```

**Required** (see `.env.example`):

```env
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=

EXPO_PUBLIC_EMAILJS_SERVICE_ID=
EXPO_PUBLIC_EMAILJS_TEMPLATE_ID=
EXPO_PUBLIC_EMAILJS_PUBLIC_KEY=
```

**Optional:**

```env
EXPO_PUBLIC_AUTH_REDIRECT_URL=
```

Use `EXPO_PUBLIC_AUTH_REDIRECT_URL` when testing magic links over LAN or dev tunnels so the redirect matches Supabase **Authentication → URL Configuration → Redirect URLs**.

---

## Development

### Run the app

| Target | Command |
|--------|---------|
| Dev server | `npm start` |
| iOS | `npm run ios` |
| Android | `npm run android` |
| Web | `npm run web` |

### Physics regression testing

The physics engine is regression-tested using golden snapshot outputs.

| Task | Command |
|------|---------|
| Run tests | `npm test` |
| Regenerate goldens | `npm run golf-physics:goldens` |
| Sync standalone lab bundle | `npm run sync:golf-physics-lab` |

After changing `app/lib/golfPhysics2.ts`, bump `CALIBRATION_VERSION`, run sync + goldens, commit the new `app/lib/__tests__/fixtures/golfPhysics2-golden-vN.json`, then `npm test`.

See **`README_DEV.md`** for the full calibration workflow.

---

## Architecture notes

### Expo Router

Filesystem-based routing under `app/`. Main surfaces:

- `index` — splash / auth gate
- `AuthScreen`, `login-callback` — Supabase magic links
- `OnboardingScreen` — club profiles and preferences
- `(tabs)/home` — dashboard
- `(tabs)/caddie` — on-course caddie UI
- `screens/*` — profile, Trackman overrides, guide, progress

### NativeWind

NativeWind v4 styles the app through a Metro-integrated CSS pipeline (`jaska.css` + `metro.config.js`).

### Supabase

Provides:

- Authentication (magic link OTP)
- Profile persistence (`profiles`)

### Async persistence

`@react-native-async-storage/async-storage` backs:

- Onboarding completion
- Session restoration
- Player preferences and cached profile data when offline

---

## Platforms

| Platform | Support |
|----------|---------|
| iOS | Yes |
| Android | Yes |
| Web | Yes (Metro web bundler) |

Native `ios/` and `android/` directories are generated locally via prebuild and are **excluded from version control** (see `.gitignore`).

---

## Roadmap

Current public roadmap areas include:

- Expanded shot profiling
- Enhanced course intelligence
- Advanced practice analytics
- Improved simulation calibration
- Deeper caddie recommendation systems

Longer-term product vision (weather/GPS automation, AR distance, course GPS, live Trackman API) is described in the root **`README.md`**.

---

## Security

This repository intentionally excludes:

- Production credentials
- Signing certificates
- Internal infrastructure config
- Private recommendation backends
- Deployment secrets

**Never commit:**

- `.env` or any file containing live keys
- Signing keys (`.jks`, `.p12`, `.p8`, provisioning profiles)
- `google-services.json`, `GoogleService-Info.plist`, or service account JSON
- Production SQL dumps

Client-side `EXPO_PUBLIC_*` values are embedded at build time; protect Supabase with **Row Level Security** and rotate keys if they were ever exposed.

---

## License

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
