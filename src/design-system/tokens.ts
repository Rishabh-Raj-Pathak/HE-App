import { colors, gradients } from './colors'
import { layout, spacing } from './spacing'
import { radius } from './radius'
import { shadows } from './shadows'
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, typography } from './typography'

export const tokens = {
  color: colors,
  gradient: gradients,
  spacing,
  layout,
  radius,
  shadow: shadows,
  font: {
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
    lineHeight,
    letterSpacing,
  },
  typography,
} as const

export type Tokens = typeof tokens
