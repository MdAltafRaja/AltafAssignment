//Temporary

import React from 'react'
import LeftNav from './LeftNav'
import TopNav from './TopNav'
import ProfileBottom from './ProfileBottom'
import AllRoutes from './AllRoutes'

function Layout() {
  return (
    <div style={{display:"flex"}}>
        <LeftNav/>
      <div >
        <TopNav/>
        <ProfileBottom/>
      </div>
      <AllRoutes/>
    </div>
  )
}

export default Layout
