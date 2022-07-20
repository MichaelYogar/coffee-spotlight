import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-prose mx-auto px-4">
        <main className="pt-4 pb-12">{children}</main>
      </div>
    </>
  );
};

export default Layout;
