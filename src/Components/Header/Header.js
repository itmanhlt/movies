import React from 'react'
import { Desktop, Mobile, Tablet } from '../../Layout/Responsive'
import DesktopHeader from './DesktopHeader'
import TabletHeader from './TabletHeader'
import MobileHeader from './MobileHeader'

export default function Header() {
  return (
    <div>
    <Desktop>
      <DesktopHeader/>
    </Desktop>
    <Tablet>
      <TabletHeader/>
    </Tablet>
    <Mobile>
      <MobileHeader/>
    </Mobile>
  </div>
  )
}
