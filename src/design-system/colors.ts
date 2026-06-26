export const colors = {
  bg: {
    default: '#000000',
    surface: '#171717',
    elevated: '#0e0e0e',
    cardMid: '#090909',
    cardDeep: '#060606',
    terminal: '#0f0e0d',
    headerDeep: '#080808',
    panel: '#121212',
    cardDark: '#0a0a0a',
    overlay: 'rgba(0, 0, 0, 0.7)',
    muted: '#3a3a3a',
    white: '#ffffff',
    glass: 'rgba(255, 255, 255, 0.06)',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(255, 255, 255, 0.8)',
    highlight: 'rgba(255, 255, 255, 0.92)',
    muted: 'rgba(255, 255, 255, 0.5)',
    disabled: 'rgba(255, 255, 255, 0.28)',
    subtle: '#888888',
    slate: '#717182',
    inverse: '#000000',
    onAccent: '#0a0a0a',
    zinc: '#d4d4d8',
  },
  accent: {
    default: '#22ffff',
    aquamarine: '#00f3b6',
    soft: 'rgba(34, 255, 255, 0.1)',
    border: 'rgba(34, 255, 255, 0.35)',
    amber: '#f2b500',
  },
  gold: {
    default: '#dcc395',
    light: '#e8d5b5',
    mid: '#ccb17f',
    dark: '#b5864a',
    glow: 'rgba(204, 177, 127, 0.4)',
    muted: 'rgba(204, 177, 127, 0.6)',
    gradient:
      'linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(232, 213, 181) 50%, rgb(204, 177, 127) 100%)',
    tabActive:
      'linear-gradient(180.44deg, rgb(26, 20, 11) 3.91%, rgb(15, 14, 12) 96.56%)',
    vaultCard:
      'linear-gradient(241.46deg, rgba(22, 20, 18, 0.76) 6.21%, rgba(14, 12, 10, 0.78) 84.07%)',
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.05)',
    default: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.12)',
    strong: 'rgba(255, 255, 255, 0.14)',
    input: 'rgba(255, 255, 255, 0.5)',
    dashed: 'rgba(255, 255, 255, 0.7)',
    panel: '#2d2d2d',
    glass: 'rgba(255, 255, 255, 0.08)',
    icon: 'rgba(255, 255, 255, 0.14)',
  },
  success: {
    default: '#4b9b72',
    bright: '#00a03a',
    figma: '#269755',
    badge: '#4ade80',
    soft: 'rgba(75, 155, 114, 0.1)',
    border: 'rgba(75, 155, 114, 0.4)',
    online: 'rgba(74, 222, 128, 0.12)',
    onlineBorder: 'rgba(74, 222, 128, 0.3)',
  },
  danger: {
    default: '#b05858',
    soft: 'rgba(176, 88, 88, 0.1)',
    border: 'rgba(176, 88, 88, 0.4)',
  },
  warning: {
    default: '#f2b500',
  },
  info: {
    default: '#2b7fff',
  },
  brand: {
    walletConnect: '#2b7fff',
    brave: '#f54900',
    metamask: '#ffffff',
  },
  handle: {
    default: 'rgba(136, 136, 136, 0.4)',
  },
  pill: {
    default: '#e1e1e1',
  },
} as const

export const gradients = {
  card: 'linear-gradient(177.71deg, rgb(14, 14, 14) 8.49%, rgb(9, 9, 9) 54.15%, rgb(6, 6, 6) 91.51%)',
  cardAlt: 'linear-gradient(175.4deg, rgb(14, 14, 14) 8.49%, rgb(9, 9, 9) 54.15%, rgb(6, 6, 6) 91.51%)',
  cardAlt2:
    'linear-gradient(163.34deg, rgb(14, 14, 14) 8.49%, rgb(9, 9, 9) 54.15%, rgb(6, 6, 6) 91.51%)',
  cardElevated:
    'linear-gradient(160.25deg, rgb(14, 14, 14) 8.49%, rgb(9, 9, 9) 54.15%, rgb(6, 6, 6) 91.51%)',
  headerGlow: 'radial-gradient(ellipse at center, rgba(34, 255, 255, 0.15) 0%, transparent 70%)',
  profileFade: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)',
  goldTitle: colors.gold.gradient,
  goldVaultCard: colors.gold.vaultCard,
  goldTabActive: colors.gold.tabActive,
} as const

export type Colors = typeof colors
export type Gradients = typeof gradients
