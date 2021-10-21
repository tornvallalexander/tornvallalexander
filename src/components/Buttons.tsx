import * as React from "react";

import { Box } from "@chakra-ui/react"

type childrenProps = {
  children: React.ReactNode
}

export const NavButton = ({ children }: childrenProps) => {
  return (
    <Box
      as="button"
      lineHeight="1.2"
      py="10px"
      px="1rem"
      transition=".3s"
      borderRadius="full"
      fontSize="md"
      fontWeight="semibold"
      color="white"
      _hover={{
        bg: "#0279ff"
      }}
    >
      {children}
    </Box>
  )
}