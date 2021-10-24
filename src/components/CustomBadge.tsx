import * as React from "react";

import { Link } from "@chakra-ui/react"

type BadgeProps = {
  children: React.ReactNode,
}

const CustomBadge = ({ children }: BadgeProps) => {
  return (
    <Link
      px={3}
      py={1}
      ml={2}
      bg="#0279ff"
      color="gray.100"
      fontSize="xs"
      transition=".3s"
      fontWeight="800"
      rounded="full"
      border="1px solid #0279ff"
      textTransform="uppercase"
      _hover={{ bg: "none" }}
    >
      {children}
    </Link>
  )
};

export default CustomBadge;