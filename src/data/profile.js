import iconClose from '../assets/figma/profile/icon-close.svg'
import iconCopy from '../assets/figma/profile/icon-copy.svg'
import iconAvatar from '../assets/figma/profile/icon-avatar.svg'
import iconPlus from '../assets/figma/profile/icon-plus.svg'
import iconGift from '../assets/figma/profile/icon-gift.svg'
import iconChevronRight from '../assets/figma/profile/icon-chevron-right.svg'
import iconInfo from '../assets/figma/profile/icon-info.svg'
import iconHelp from '../assets/figma/profile/icon-help.svg'
import iconStar from '../assets/figma/profile/icon-star.svg'
import iconBook from '../assets/figma/profile/icon-book.svg'
import iconDoc from '../assets/figma/profile/icon-doc.svg'
import iconDisconnect from '../assets/figma/profile/icon-disconnect.svg'
import iconXTwitter from '../assets/figma/profile/icon-x-twitter.svg'
import iconDiscord from '../assets/figma/profile/icon-discord.svg'
import iconTelegram from '../assets/figma/profile/icon-telegram.svg'

export const profileAssets = {
  iconClose,
  iconCopy,
  iconAvatar,
  iconPlus,
  iconGift,
  iconChevronRight,
  iconDisconnect,
}

export const PROFILE = {
  address: '0xbf4…4eedea',
  fullAddress: '0xbf4c1a9d2e6f8b3c5a7d0e1f2a3b4c5d64eedea',
  online: true,
  stats: [
    { id: 'balance', label: 'Balance', value: '$12,840' },
    { id: 'pnl', label: 'PNL', value: '+$2,194', tone: 'success' },
    { id: 'tier', label: 'Tier', value: 'Base' },
  ],
}

export const APP_MENU = [
  {
    id: 'about',
    icon: iconInfo,
    title: 'About Us',
    description: 'Learn more about HyperEarn',
  },
  {
    id: 'faq',
    icon: iconHelp,
    title: 'FAQ & Support',
    description: 'Docs, help centre, contact',
  },
  {
    id: 'rate',
    icon: iconStar,
    title: 'Rate Us on App Store',
    description: 'Share your experience',
  },
  {
    id: 'onboarding',
    icon: iconBook,
    title: 'Onboarding',
    description: 'Replay the getting-started guide',
  },
]

export const LEGAL_MENU = [
  {
    id: 'privacy',
    icon: iconDoc,
    title: 'Privacy Policy',
    description: 'How we handle your data',
  },
  {
    id: 'terms',
    icon: iconDoc,
    title: 'Terms & Conditions',
    description: 'Usage terms and agreements',
  },
]

export const SOCIAL_LINKS = [
  { id: 'x', icon: iconXTwitter, label: 'X / Twitter', href: 'https://x.com', iconSize: 15 },
  { id: 'discord', icon: iconDiscord, label: 'Discord', href: 'https://discord.com', iconSize: 16 },
  { id: 'telegram', icon: iconTelegram, label: 'Telegram', href: 'https://telegram.org', iconSize: 16 },
]
