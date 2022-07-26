import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex justify="center" whiteSpace="pre-wrap" py={5}>
      <Text as="span">Made with 🧊 + ☕. </Text>
      <Text as="span">View Source.</Text>
    </Flex>
  );
};

export default Footer;
