import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>{element}</ChakraProvider>
  );
};
