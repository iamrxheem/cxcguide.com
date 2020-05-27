import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import Imports from "./imports";

// Navigation

function Layout({children}) {
  console.log("flex-1 full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16");

  return (
    <>
      <Imports />
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />
        <main className="flex-1 full ">{children}</main>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
