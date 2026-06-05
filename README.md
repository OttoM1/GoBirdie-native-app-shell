# GoBirdie — Native App Shell

https://gobirdieapp.com

Beta-grade **Expo / React Native** client for GoBirdie: golf intelligence, shot physics, and caddie systems.

- `open-source-core` — development branch containing the public Expo/React Native client, UI systems, and production-grade mobile architecture powering GoBirdie.

---


## Current development tree (5.6.2026)

```
Metro-Bundler/
└── gobirdiex/
    ├── .vscode/
    ├── app/                         
    │   ├── (tabs)/
    │   │   └── guide/
    │   ├── MenuWindowSettings/
    │   ├── components/
    │   ├── constants/
    │   ├── context/
    │   ├── hooks/
    │   ├── lib/
    │   │   ├── __tests__/
    │   │   │   └── fixtures/
    │   │   └── dev_integrations/
    │   ├── logic/
    │   ├── screens/
    │   │   ├── Caddie/
    │   │   │   ├── caddie_components/
    │   │   │   ├── caddie_constants/
    │   │   │   ├── caddie_context/
    │   │   │   ├── caddie_data/
    │   │   │   ├── caddie_types/
    │   │   │   ├── caddie_ui/
    │   │   │   └── manual_caddie/
    │   │   ├── auth_gates/
    │   │   ├── screens_components/
    │   │   └── tools/
    │   │       └── caddie/
    │   └── ui_assets/
    ├── bg_components/                
    ├── components/                  
    │   └── ui/
    ├── database/                    
    ├── hooks/                     
    ├── packages/                   
    │   ├── club-profile-logic/
    │   │   ├── Design/
    │   │   └── src/
    │   │       ├── anchor/
    │   │       ├── constants/
    │   │       ├── estimation/
    │   │       ├── export/
    │   │       ├── methods/
    │   │       ├── pipeline/
    │   │       ├── types/
    │   │       └── utils/
    │   └── golf-physics/
    │       ├── lib/
    │       └── src/
    ├── scripts/                     
    └── supabase/                     
        └── migrations/

```

---

## Overview

This will be the public mobile client architecture behind **GoBirdie**.

The application combines:

- Custom golf ball-flight physics
- Environmental caddie calculations
- Adaptive practice systems
- Trackman-style shot profiling
- A modern React Native mobile stack built for production deployment

This repository focuses on the **mobile runtime**, **interface systems**, and **client-side infrastructure** used to power the GoBirdie experience.

---

### Mobile infrastructure

Production-oriented React Native architecture with:

- Expo Router
- Typed React contexts
- Deep linking and magic-link auth
- Offline persistence (AsyncStorage)
- Modular feature organization

---


## Platforms

| Platform | Support |
|----------|---------|
| iOS | Yes |
| Android | Yes |
| Web | Yes (Metro web bundler) |

Native `ios/` and `android/` directories are generated locally via prebuild and are **excluded from version control** (see `.gitignore`).
