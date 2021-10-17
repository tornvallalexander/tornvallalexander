import * as React from "react";

import {
  chakra,
  Box,
  Flex,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton, Text, Link
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai";
import { Link as RouterLink } from "gatsby";

import { NavButton } from "./Button"

export default function Navbar() {
  const bg = "gray.800";
  const mobileNav = useDisclosure();

  return (
    <Box
      pt={{ base: "0rem", md: "1rem" }}
      position="sticky"
      top={{ base: "0rem", md: "1rem" }}
      zIndex="1400"
    >
      <chakra.header
        bg={bg}
        maxW="600px"
        px={{ base: 2, sm: 4 }}
        py={4}
        mx="auto"
        shadow="md"
        borderRadius={{ base: "none", md: "full"}}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      >
        <Flex alignItems="center" justifyContent={{ base: "space-between", md: "space-evenly"}} mx="auto">
          <Flex>
            <Link
              as={RouterLink}
              to="/"
              title="Home Page"
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "none" }}
              _focus={{ outline: "none" }}
            >
              <Text
                fontFamily="Lexend Deca"
                fontSize="xl"
                ml="2"
                color="white"
                fontWeight="semibold"
                textAlign="center"
                textDecoration="none"
              >
                tornvallalexander
              </Text>
            </Link>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <NavButton>Blog</NavButton>
              <NavButton>About</NavButton>
              <NavButton>Sign in</NavButton>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                variant="ghost"
                _hover={{ color: "gray.800", bg: "gray.100"}}
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={4}
                bg={bg}
                spacing={3}
                rounded="sm"
                borderRadius="2xl"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                  color="white"
                />

                <NavButton>Blog</NavButton>
                <NavButton>About</NavButton>
                <NavButton>Sign in</NavButton>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
}