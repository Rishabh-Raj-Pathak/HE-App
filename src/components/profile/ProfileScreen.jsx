import MobileShell from '../layout/MobileShell'
import BottomNav from '../layout/BottomNav'
import Header from '../ui/Header'
import IconButton from '../ui/IconButton'
import ProfileCard from './ProfileCard'
import ProfileActions from './ProfileActions'
import MenuSection from './MenuSection'
import DeleteAccountButton from './DeleteAccountButton'
import CommunityLinks from './CommunityLinks'
import { APP_MENU, LEGAL_MENU, profileAssets } from '../../data/profile'

const DISCONNECT_ITEM = [
  { id: 'disconnect', icon: profileAssets.iconDisconnect, title: 'Disconnect Wallet' },
]

export default function ProfileScreen({ onClose, onNavigate }) {
  return (
    <MobileShell className="h-dvh overflow-hidden shadow-[8px_0_32px_rgba(0,0,0,0.5)]">
      <Header
        className="h-[56px]"
        leading={
          <h1 className="text-[19px] font-bold leading-[28.5px] tracking-[-0.57px] text-text-highlight">
            Profile
          </h1>
        }
        trailing={
          <IconButton
            label="Close profile"
            onClick={onClose}
            style={{
              backgroundImage:
                'linear-gradient(160deg, rgb(14, 14, 14) 8.49%, rgb(6, 6, 6) 91.51%)',
            }}
            className="size-9 rounded-[10px] shadow-[0_2px_5px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.5)]"
          >
            <img src={profileAssets.iconClose} alt="" className="size-[15px]" />
          </IconButton>
        }
      />

      <div className="hide-scrollbar flex-1 overflow-y-auto">
        <div className="flex flex-col gap-5 px-5 pb-10 pt-6">
          <ProfileCard />
          <ProfileActions />
          <MenuSection label="App" items={APP_MENU} />
          <MenuSection label="Legal" items={LEGAL_MENU} />
          <MenuSection items={DISCONNECT_ITEM} />
          <DeleteAccountButton />
          <CommunityLinks />
        </div>
      </div>

      <BottomNav activeId="user" onNavigate={onNavigate} />
    </MobileShell>
  )
}
