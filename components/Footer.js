import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NextJSLogo from "../public/icons/nextdotjs.svg";

const Footer = () => {
  return (
    <Flex className="tw-justify-center tw-whitespace-pre-wrap tw-my-2">
      <span>Made with 💗 and </span>
      <Image src={NextJSLogo} alt="nextjs logo" height={30} />
    </Flex>
  );
};

export default Footer;
