export const shadows = {
  none: 'none',
  sm: '0 2px 6px rgba(0, 0, 0, 0.3)',
  md: '0 4px 12px rgba(0, 0, 0, 0.7)',
  lg: '0 4px 24px rgba(0, 0, 0, 0.5)',
  xl: '0 8px 32px rgba(0, 0, 0, 0.85)',
  cardInset:
    'inset 1px 0 4px rgba(255, 255, 255, 0.05), inset -1px 0 0 rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
  cardInsetDeep:
    'inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.55)',
  iconButton:
    '0 2px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  sheetUp: '0 -8px 40px rgba(0, 0, 0, 0.6)',
  vaultGlow: '0 0 15px rgba(204, 177, 127, 0.4)',
  profileCard: '0 8px 32px rgba(0, 0, 0, 0.45)',
  textSm: '0 3px 4px rgba(0, 0, 0, 0.3)',
  textMd: '0 4px 4px rgba(0, 0, 0, 0.35)',
  dividerInset: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
} as const

export type Shadows = typeof shadows
