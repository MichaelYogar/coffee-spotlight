import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="top-0 bg-black/5 flex justify-around p-4">
      <div>
        <Link href="/">
          <a>Michael Yogar</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className="mr-4 hover:underline underline-offset-4">Home</a>
        </Link>
        <Link href="/blog">
          <a className="mr-4 hover:underline underline-offset-4">Blog</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline underline-offset-4">About</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
