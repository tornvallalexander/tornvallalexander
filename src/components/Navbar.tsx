import * as React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton, Text, Link
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai";
import { Link as RouterLink } from "gatsby";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <Box pt={{ base: "0rem", md: "1rem" }} position="sticky" top={{ base: "0rem", md: "1rem" }} zIndex="1400">
      <chakra.header
        bg={bg}
        maxW="600px"
        px={{ base: 2, sm: 4 }}
        py={4}
        mx="auto"
        shadow="md"
        borderRadius={{ base: "none", md: "full"}}
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
              <Button variant="ghost">Blog</Button>
              <Button variant="ghost">Company</Button>
              <Button variant="ghost">Sign in</Button>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
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
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
}