import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="tw-flex tw-max-w-prose tw-mx-auto tw-px-4 tw-h-screen tw-flex-col">
        <Header />
        <main className="tw-pt-4 tw-pb-12 tw-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
