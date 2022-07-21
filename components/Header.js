import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="tw-top-0 tw-flex tw-justify-end tw-p-5">
      <div>
        <Link href="/">
          <Button
            as="a"
            colorScheme="cyan"
            variant={router.asPath === "/" ? "solid" : "ghost"}
            fontWeight="normal"
            className="tw-mr-2"
          >
            Home
          </Button>
        </Link>
        <Link href="/blog">
          <Button
            as="a"
            colorScheme="cyan"
            variant={router.asPath.startsWith("/blog") ? "solid" : "ghost"}
            fontWeight="normal"
          >
            Blog
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
