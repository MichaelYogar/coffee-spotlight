import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" mb={4}>
      <Heading as="h1" size={"2xl"} mb={1}>
        Hi, I&apos;m Michael
        <span role="img" aria-label="Coffee">
          ☕{" "}
        </span>
      </Heading>
      <Text>I&apos;m a software developer that loves coffee!</Text>
    </Flex>
  );
};

export default AboutMe;
