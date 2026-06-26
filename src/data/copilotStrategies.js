export const COPILOT_STRATEGIES = [
  {
    id: 'momentum-based',
    name: 'Momentum Based',
    riskLevel: 'MEDIUM RISK',
    description:
      'Trade high-momentum setups using technical signals across short to medium timeframes.',
    timeframe: '15m-4h',
    bestFor: 'Filtered setups with strong signal quality.',
    categories: [
      { id: 'bluechip', label: 'Bluechip', icon: 'coins' },
      { id: 'hip-3', label: 'Stocks (HIP-3)', icon: 'dumbbell' },
      { id: 'trending', label: 'Trending', icon: 'trending-up' },
      { id: 'trade-xyz', label: 'Trade[XYZ]', icon: 'sparkles' },
    ],
  },
  {
    id: 'high-conviction',
    name: 'High Conviction',
    riskLevel: 'LOW RISK',
    description:
      'Surface fewer, higher-quality setups with strict confluence and risk filters.',
    timeframe: '1h-1d',
    bestFor: 'Patient entries with strong multi-signal alignment.',
    categories: [
      { id: 'bluechip', label: 'Bluechip', icon: 'coins' },
      { id: 'trending', label: 'Trending', icon: 'trending-up' },
      { id: 'trade-xyz', label: 'Trade[XYZ]', icon: 'sparkles' },
    ],
  },
  {
    id: 'v3-risk-engine',
    name: 'V3 Risk Engine',
    riskLevel: 'HIGH RISK',
    description:
      'AI-driven prompt + risk engine for aggressive short-term setups.',
    timeframe: '5m-1h',
    bestFor: 'Active traders comfortable with fast-moving signals.',
    categories: [
      { id: 'hip-3', label: 'Stocks (HIP-3)', icon: 'dumbbell' },
      { id: 'trending', label: 'Trending', icon: 'trending-up' },
      { id: 'trade-xyz', label: 'Trade[XYZ]', icon: 'sparkles' },
    ],
  },
]

export function getStrategyById(id) {
  return COPILOT_STRATEGIES.find((s) => s.id === id)
}

export function getDefaultStrategy() {
  return COPILOT_STRATEGIES[0]
}

export function getDefaultCategoryForStrategy(strategyId) {
  const strategy = getStrategyById(strategyId)
  return strategy?.categories[0]?.id ?? null
}
