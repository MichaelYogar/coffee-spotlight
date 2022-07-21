import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NextJSIcon from "../public/icons/nextdotjs.svg";

const Footer = () => {
  return (
    <Flex className="tw-justify-center tw-whitespace-pre-wrap tw-my-2">
      <span>Made with 💗 and </span>
      <a href="https://nextjs.org/" target={"_blank"} rel={"noreferrer"}>
        <Image src={NextJSIcon} alt="nextjs logo" height={30} />
      </a>
    </Flex>
  );
};

export default Footer;
