import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="tw-max-w-prose tw-mx-auto tw-px-4">
        <Header />
        <main className="tw-pt-4 tw-pb-12">{children}</main>
      </div>
    </>
  );
};

export default Layout;
