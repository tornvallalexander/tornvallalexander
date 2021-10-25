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

import { NavButton } from "./Buttons"

export default function Navbar() {
  const mobileNav = useDisclosure();

  return (
    <Box
      pt={{ base: "0rem", md: "1rem" }}
      position="sticky"
      top={{ base: "0rem", md: "1rem" }}
      zIndex="1400"
    >
      <chakra.header
        bg="rgb(26,32,44, 0.95)"
        border="1px solid #2d3748"
        backdropFilter="blur(3px)"
        maxW={{ base: "full", md: "600px" }}
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
              spacing={3}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <NavButton link="/">Blog</NavButton>
              <NavButton link="/profile/alexander-tornvall">About</NavButton>
              <NavButton link="/">Sign in</NavButton>
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
                borderRadius="2xl"
                bg="rgb(26,32,44, 0.99)"
                border="1px solid #2d3748"
                spacing={3}
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                  color="white"
                />

                <NavButton link="/">Blog</NavButton>
                <NavButton link="/profile/alexander-tornvall">About</NavButton>
                <NavButton link="/">Sign in</NavButton>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
}