import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../lib/theme";

const Chakra = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Chakra;
