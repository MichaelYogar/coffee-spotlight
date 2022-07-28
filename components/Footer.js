import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex justify="center" whiteSpace="pre-wrap" py={5}>
      <Text as="span">Made with 🧊 + ☕. </Text>
      <NextLink
        href={"https://github.com/MichaelYogar/coffee-spotlight"}
        passHref
      >
        <Link isExternal>View Source</Link>
      </NextLink>
    </Flex>
  );
};

export default Footer;
