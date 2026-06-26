export const RISK_VARIANT = {
  'LOW RISK': 'success',
  'MEDIUM RISK': 'neutral',
  'HIGH RISK': 'danger',
}

export const RISK_BADGE_CLASSES = {
  success: 'border-success-default/26 bg-success-default/14 text-success-default',
  neutral: 'border-white/20 bg-white/5 text-text-muted',
  danger: 'border-danger-default/40 bg-danger-default/10 text-danger-default',
  default: 'border-white/10 bg-white/5 text-text-disabled',
}

export function formatRiskLabel(riskLevel) {
  return riskLevel.replace(' RISK', '').toLowerCase()
}

export function getRiskVariant(riskLevel) {
  return RISK_VARIANT[riskLevel] ?? 'default'
}

export function getRiskBadgeClass(riskLevel) {
  const variant = getRiskVariant(riskLevel)
  return RISK_BADGE_CLASSES[variant] ?? RISK_BADGE_CLASSES.default
}
