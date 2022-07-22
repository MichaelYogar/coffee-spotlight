import { Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NextJSIcon from "../public/icons/nextdotjs.svg";

const Footer = () => {
  return (
    <Flex justify="center" whiteSpace="pre-wrap" marginY="2">
      <Text as="span">Made with 💗 and </Text>
      <Link href="https://nextjs.org/" isExternal>
        <Image src={NextJSIcon} alt="nextjs logo" height={30} />
      </Link>
    </Flex>
  );
};

export default Footer;
