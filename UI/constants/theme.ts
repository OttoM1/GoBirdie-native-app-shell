export const C = {
  h: {
    graphite: "#ccc8c8", //

    bluemint: "#949191", // 'rgba(0, 125, 100, 0.9)'

    mint: "#4ed998", //
    baby: "#36f5f5",
    link: "#71d8fa",
    error: "#ff0d3a",
    titleWhite: 'rgb(234, 240, 245)',
    gShadow: 'rgba(11, 255, 137, 0.57)',

    r: "#4ed998", // 'rgba(175, 237, 2, 0.9)' //3feb36

    shadow: "rgba(68, 219, 139, 0.2)",
  },
};


export const UI = {
  text: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.5)",
  },
  surface: {
    screen: "#000000",
    card: "rgba(8, 8, 8, 0.8)",
    cardBorder: "rgba(255, 255, 255, 0.1)",
    listRowBorder: "rgba(255, 255, 255, 0.05)",
    nav: "rgba(20, 20, 20, 0.95)",
    navBorder: "rgba(255, 255, 255, 0.08)",
    pill: "rgba(255, 255, 255, 0.1)",
    streakRing: "rgba(255, 255, 255, 0.2)",
    streakFill: "rgba(255, 255, 255, 0.1)",
    progressTrack: "rgba(255, 255, 255, 0.05)",
    progressFill: "#FFFFFF",
    sphereFallback: "#222222",
  },
  radius: {
    card: 24,
    listRow: 20,
    thumb: 12,
    pill: 12,
    nav: 35,
    streak: 25,
    progress: 3,
  },
  type: {
    sectionLabel: { fontSize: 10, fontWeight: "700" as const, letterSpacing: 1.5 },
      meta: { fontSize: 10, fontWeight: "700" as const, letterSpacing: 1 },
    nav: { fontSize: 10, fontWeight: "700" as const, letterSpacing: 0.5 },
  },
} as const;

export const NATIVE_TINT = {
  mintMuted: "#2f825b",

  bluemintBright: "#d0cece",
} as const;

export const FONTS = {
  heading: "System",
  body: "System",
  mono: "Courier",
};

export const WEIGHT = {
  bodies: {
    general: "100",
    thick: "300",
  },
};

export const SPACING = {
  neg: -4,
  xs: 4,
  sm: 8,
  sd: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
  full: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  glow: {
    shadowColor: "#ff9292",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
};
