import { Flex, Button, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex top="0" justify="end" p={5}>
      <Link href="/">
        <Button
          colorScheme="cyan"
          variant={router.asPath === "/" ? "solid" : "ghost"}
          fontWeight="normal"
          marginRight={2}
        >
          Home
        </Button>
      </Link>
      <Link href="/blog">
        <Button
          colorScheme="cyan"
          variant={router.asPath.startsWith("/blog") ? "solid" : "ghost"}
          fontWeight="normal"
          marginRight={2}
        >
          Blog
        </Button>
      </Link>
      <ThemeToggleButton />
    </Flex>
  );
};

export default Header;
