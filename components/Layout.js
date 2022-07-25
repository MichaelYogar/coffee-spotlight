import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container, Divider, Spacer } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Container display="flex" px={1} height="100vh" flexDirection="column">
        <Header />
        <Box as="main">{children}</Box>
        <Spacer />
        <Divider borderBottomWidth="2px" mt={5} />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
