import iconHelp from '../assets/figma/wallet/icon-help.png'
import iconClose from '../assets/figma/wallet/icon-close.png'
import iconWalletConnect from '../assets/figma/wallet/icon-walletconnect.png'
import iconBrave from '../assets/figma/wallet/icon-brave.png'
import iconAllWallets from '../assets/figma/wallet/icon-all-wallets.png'

export const walletAssets = {
  iconHelp,
  iconClose,
  iconWalletConnect,
  iconBrave,
  iconAllWallets,
}

export const WALLET_OPTIONS = [
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: iconWalletConnect,
    iconBg: 'bg-[#2b7fff]',
    iconSize: 'size-7',
    badge: { type: 'label', text: 'QR Code' },
  },
  {
    id: 'metamask',
    name: 'MetaMask',
    emoji: '🦊',
    iconBg: 'bg-white',
    badge: { type: 'installed', text: 'Installed' },
  },
  {
    id: 'brave',
    name: 'Brave Wallet',
    icon: iconBrave,
    iconBg: 'bg-[#f54900]',
    iconSize: 'h-[21px] w-[22px]',
    badge: { type: 'installed', text: 'Installed' },
  },
  {
    id: 'all-wallets',
    name: 'All Wallets',
    icon: iconAllWallets,
    iconBg: 'bg-[#3a3a3a]',
    iconSize: 'size-[18px]',
    badge: { type: 'count', text: '540' },
  },
]
