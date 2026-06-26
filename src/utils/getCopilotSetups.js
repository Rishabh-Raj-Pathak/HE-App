import { COPILOT_SETUPS } from '../data/copilotSetups'

export function getCopilotSetups({ strategyId, categoryId }) {
  return COPILOT_SETUPS.filter(
    (setup) => setup.strategyId === strategyId && setup.category === categoryId
  )
}
