export const RISK_VARIANT = {
  'LOW RISK': 'success',
  'MEDIUM RISK': 'warning',
  'HIGH RISK': 'danger',
}

export const RISK_BADGE_CLASSES = {
  success: 'border-success-default/40 bg-success-default/10 text-success-default',
  warning: 'border-accent-amber/60 bg-accent-amber/10 text-accent-amber',
  danger: 'border-danger-default/40 bg-danger-default/10 text-danger-default',
  default: 'border-border-default bg-white/5 text-text-muted',
}

export function formatRiskLabel(riskLevel) {
  return riskLevel.replace(' RISK', '').toLowerCase()
}

export function getRiskVariant(riskLevel) {
  return RISK_VARIANT[riskLevel] ?? 'default'
}

export function getRiskBadgeClass(riskLevel) {
  return RISK_BADGE_CLASSES[getRiskVariant(riskLevel)] ?? RISK_BADGE_CLASSES.default
}
