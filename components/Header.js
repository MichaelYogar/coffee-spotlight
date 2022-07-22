import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
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
        >
          Blog
        </Button>
      </Link>
    </Flex>
  );
};

export default Header;
