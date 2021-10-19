import * as React from "react";

import { Link } from "@chakra-ui/react"

type BadgeProps = {
  children: React.ReactNode
}

const CustomBadge = ({ children }: BadgeProps) => {
  return (
    <Link
      px={3}
      py={1}
      ml={2}
      bg="#0279ff"
      color="gray.100"
      fontSize="sm"
      fontWeight="700"
      rounded="md"
      _hover={{ bg: "gray.500" }}
    >
      {children}
    </Link>
  )
};

export default CustomBadge;