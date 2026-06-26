export const fontFamily = {
  sans: '"Manrope", system-ui, sans-serif',
  display: '"Onest", "Manrope", system-ui, sans-serif',
} as const

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const

export const fontSize = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  base: '16px',
  lg: '17px',
  xl: '18px',
  '2xl': '24px',
} as const

export const lineHeight = {
  tight: '1.2',
  snug: '1.25',
  normal: '1.5',
  relaxed: '1.625',
} as const

export const letterSpacing = {
  tight: '-0.425px',
  normal: '0',
  wide: '0.5px',
  wider: '0.76px',
  chip: '0.115px',
} as const

export const typography = {
  heading: {
    '2xl': {
      fontSize: '28px',
      fontWeight: fontWeight.bold,
      lineHeight: '42px',
      letterSpacing: letterSpacing.normal,
    },
    xl: {
      fontSize: '26px',
      fontWeight: fontWeight.bold,
      lineHeight: '39px',
      letterSpacing: '-0.78px',
    },
    lg: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.bold,
      lineHeight: '28px',
      letterSpacing: letterSpacing.normal,
    },
    md: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.bold,
      lineHeight: '25.5px',
      letterSpacing: letterSpacing.tight,
    },
    sm: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.bold,
      lineHeight: '17.4px',
      letterSpacing: '-0.29px',
    },
  },
  body: {
    md: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
      lineHeight: '24px',
      letterSpacing: letterSpacing.normal,
    },
    sm: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.regular,
      lineHeight: '20px',
      letterSpacing: letterSpacing.normal,
    },
    xs: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      lineHeight: '18.75px',
      letterSpacing: letterSpacing.normal,
    },
  },
  caption: {
    sm: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.semibold,
      lineHeight: '14.4px',
      letterSpacing: letterSpacing.normal,
    },
    xs: {
      fontSize: '11.5px',
      fontWeight: fontWeight.regular,
      lineHeight: '18.75px',
      letterSpacing: letterSpacing.normal,
    },
  },
  label: {
    xs: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.semibold,
      lineHeight: '15px',
      letterSpacing: letterSpacing.wide,
      textTransform: 'uppercase' as const,
    },
    micro: {
      fontSize: '8px',
      fontWeight: fontWeight.semibold,
      lineHeight: '10px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
    },
  },
  button: {
    md: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      lineHeight: '18px',
      letterSpacing: letterSpacing.normal,
    },
    sm: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.semibold,
      lineHeight: '17.25px',
      letterSpacing: letterSpacing.chip,
    },
  },
  nav: {
    label: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.bold,
      lineHeight: '15px',
      letterSpacing: letterSpacing.normal,
    },
  },
  display: {
    hero: {
      fontSize: '36px',
      fontWeight: fontWeight.regular,
      lineHeight: '36px',
      letterSpacing: '-1.8px',
    },
  },
  section: {
    gold: {
      fontSize: '18px',
      fontWeight: fontWeight.medium,
      lineHeight: '27px',
      letterSpacing: letterSpacing.normal,
    },
    label: {
      fontSize: '10px',
      fontWeight: fontWeight.semibold,
      lineHeight: '15px',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
    },
  },
} as const

export type Typography = typeof typography
