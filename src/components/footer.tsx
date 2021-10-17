import React from 'react';

import {
  Box,
  Text,
  Flex,
} from "@chakra-ui/react"

const Logo = () => {
  return (
    <Text
      fontFamily="Lexend Deca"
      fontSize="xl"
      ml="2"
      color="white"
      fontWeight="semibold"
      textAlign="center"
    >
      tornvallalexander
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg="gray.900"
      color="gray.200"
    >
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: "gray.700",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: "gray.700",
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'} textStyle="body">
          © 2021 tornvallalexander. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}