import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/lexend-deca";
import "@fontsource/poppins";
import "@fontsource/roboto-mono";

import theme from "./theme";

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>{element}</ChakraProvider>
  );
};
