export const radius = {
  none: '0px',
  sm: '8px',
  md: '14px',
  lg: '16px',
  xl: '21px',
  '2xl': '32px',
  sheet: '50px',
  pill: '80px',
  full: '9999px',
} as const

export type Radius = typeof radius
