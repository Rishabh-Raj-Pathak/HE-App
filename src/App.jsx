import { useState } from 'react'
import AiCopilotScreen from './components/copilot/AiCopilotScreen'
import ProfileScreen from './components/profile/ProfileScreen'

function App() {
  const [screen, setScreen] = useState('copilot')

  // Only the copilot and profile screens exist so far; other tabs are inert.
  const navigate = (navId) => {
    if (navId === 'user') setScreen('profile')
    else if (navId === 'ai') setScreen('copilot')
  }

  if (screen === 'profile') {
    return (
      <ProfileScreen
        onClose={() => setScreen('copilot')}
        onNavigate={navigate}
      />
    )
  }

  return (
    <AiCopilotScreen
      onProfile={() => setScreen('profile')}
      onNavigate={navigate}
    />
  )
}

export default App
