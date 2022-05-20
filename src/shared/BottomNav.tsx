import Profile from '../profile/Profile'
import { useState } from 'react'
import * as UI from './ui'

export type BottomNavProps = {
  topBar?: JSX.Element
}

export default function BottomNav({ topBar }: BottomNavProps) {
  const [profileOpen, setProfileOpen] = useState<boolean>(false)

  const toggleProfile = () => {
    setProfileOpen(!profileOpen)
  }

  return (
    <UI.BottomNav>
      {topBar}
      <UI.BottomNavMenu>
        <UI.BottomNavUser>
          <i className="fa-solid fa-bars"></i>
        </UI.BottomNavUser>
        <UI.BottomNavBars>
          <i className="fa-solid fa-user" onClick={toggleProfile}></i>
        </UI.BottomNavBars>
      </UI.BottomNavMenu>
      <Profile open={profileOpen} onClose={toggleProfile} />
    </UI.BottomNav>
  )
}
