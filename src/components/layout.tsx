import * as React from "react"

import SideNavbar from "./SideNavbar"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SideNavbar children={children} />
    </>
  )
}

export default Layout
