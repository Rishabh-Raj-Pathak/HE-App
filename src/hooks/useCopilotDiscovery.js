import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  getDefaultCategoryForStrategy,
  getDefaultStrategy,
} from '../data/copilotStrategies'
import { getCopilotSetups } from '../utils/getCopilotSetups'

const INITIAL_EXPIRY_SECONDS = 5 * 60 + 21

function formatExpiry(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`
}

export default function useCopilotDiscovery() {
  const defaultStrategy = getDefaultStrategy()
  const [strategyId, setStrategyId] = useState(defaultStrategy.id)
  const [categoryId, setCategoryId] = useState(
    getDefaultCategoryForStrategy(defaultStrategy.id)
  )
  const [expiresIn, setExpiresIn] = useState(INITIAL_EXPIRY_SECONDS)
  const [refreshKey, setRefreshKey] = useState(0)

  const setups = useMemo(
    () => getCopilotSetups({ strategyId, categoryId }),
    [strategyId, categoryId, refreshKey]
  )

  const setStrategy = useCallback((id) => {
    setStrategyId(id)
    setCategoryId(getDefaultCategoryForStrategy(id))
  }, [])

  const setCategory = useCallback((id) => {
    setCategoryId(id)
  }, [])

  const refresh = useCallback(() => {
    setExpiresIn(INITIAL_EXPIRY_SECONDS)
    setRefreshKey((k) => k + 1)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setExpiresIn((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return {
    strategyId,
    categoryId,
    setups,
    activeCount: setups.length,
    expiresIn: formatExpiry(expiresIn),
    setStrategy,
    setCategory,
    refresh,
  }
}
