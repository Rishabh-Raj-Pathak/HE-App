import iconAiScience from '../assets/figma/icon-ai-science.svg'
import iconClock from '../assets/figma/icon-clock.png'
import iconRefresh from '../assets/figma/icon-refresh.png'
import iconShare from '../assets/figma/icon-share.png'
import iconArrow from '../assets/figma/icon-arrow.svg'
import tokenBtc from '../assets/figma/token-btc.png'
import tokenEth from '../assets/figma/token-eth.png'
import tokenChain from '../assets/figma/token-chain.png'
import tokenSol from '../assets/figma/token-sol.png'
import tokenDoge from '../assets/figma/token-doge-short.png'
import sparkline1 from '../assets/figma/sparkline-1.svg'
import sparkline2 from '../assets/figma/sparkline-2.svg'
import sparkline3 from '../assets/figma/sparkline-3.svg'
import sparkline4 from '../assets/figma/sparkline-4.svg'
import sparkline5 from '../assets/figma/sparkline-5.svg'
import navAi from '../assets/figma/nav-ai.png'
import navTrading from '../assets/figma/nav-trading.png'
import navWallet from '../assets/figma/nav-wallet.png'
import navUser from '../assets/figma/nav-user.png'
import navInsights from '../assets/figma/nav-insights.png'
import navList from '../assets/figma/nav-list.png'
import gradientBg from '../assets/figma/gradient-bg.png'

export const assets = {
  iconAiScience,
  iconClock,
  iconRefresh,
  iconShare,
  iconArrow,
  gradientBg,
  nav: {
    ai: navAi,
    trading: navTrading,
    wallet: navWallet,
    user: navUser,
    insights: navInsights,
    list: navList,
  },
}

export const FILTER_TABS = ['All', 'Trending', 'HIP-3', 'Bluechip', 'Spotlight']

export const STATS = [
  { label: '7D VOLUME', value: '$2.4M' },
  { label: 'TOTAL TRADES', value: '1,847' },
  { label: 'WIN RATE', value: '73.2%' },
]

export const TRADES = [
  {
    id: 1,
    symbol: 'BTC',
    position: 'Long',
    positionType: 'long',
    priceRange: '$0.842 – $0.855',
    confidence: '78%',
    riskReward: 'R:R 1:2.4',
    tokenIcon: tokenBtc,
    tokenSize: 'size-[33px]',
    sparkline: sparkline1,
    rowPadding: 'py-[5px] pb-[5.3px]',
  },
  {
    id: 2,
    symbol: 'BTC',
    position: 'Long',
    positionType: 'long',
    priceRange: '$0.842 – $0.855',
    confidence: '78%',
    riskReward: 'R:R 1:2.4',
    tokenIcon: tokenEth,
    tokenSize: 'h-[34px] w-[33px]',
    sparkline: sparkline2,
    rowPadding: 'py-[10px] pb-[10.3px]',
  },
  {
    id: 3,
    symbol: 'BTC',
    position: 'Long',
    positionType: 'long',
    priceRange: '$0.842 – $0.855',
    confidence: '78%',
    riskReward: 'R:R 1:2.4',
    tokenIcon: tokenChain,
    tokenSize: 'h-[28px] w-[38px]',
    sparkline: sparkline3,
    rowPadding: 'py-[10px] pb-[10.3px]',
  },
  {
    id: 4,
    symbol: 'BTC',
    position: 'Long',
    positionType: 'long',
    priceRange: '$0.842 – $0.855',
    confidence: '78%',
    riskReward: 'R:R 1:2.4',
    tokenIcon: tokenSol,
    tokenSize: 'h-[39px] w-[38px]',
    sparkline: sparkline4,
    rowPadding: 'py-[10px] pb-[10.3px]',
  },
  {
    id: 5,
    symbol: 'BTC',
    position: 'short',
    positionType: 'short',
    priceRange: '$0.842 – $0.855',
    confidence: '78%',
    riskReward: 'R:R 1:2.4',
    tokenIcon: tokenDoge,
    tokenSize: 'size-[37px]',
    sparkline: sparkline5,
    rowPadding: 'py-[10px] pb-[10.3px]',
  },
]
