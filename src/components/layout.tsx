import * as React from "react"

import Navbar from "./Navbar"
import Footer from "./footer"
import { Box } from "@chakra-ui/react"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box bg="gray.600">
        <Navbar />
        <Box py="4rem">
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Layout
