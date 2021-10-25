import * as React from "react";

import { Box } from "@chakra-ui/react"
import { Link as RouterLink } from "gatsby"

type childrenProps = {
  children: React.ReactNode,
  link: string,
}

export const NavButton = ({ children, link }: childrenProps) => {
  return (
    <Box
      as={RouterLink}
      to={link}
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