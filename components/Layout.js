import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container, Divider, Spacer } from "@chakra-ui/react";
import Head from "next/head";

const Layout = ({ children, title = "Coffee Spotlight" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Michael Yogar" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
