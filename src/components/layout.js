import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import Imports from "./imports";
import AdBlockDetect from "react-ad-block-detect";

// Crisp chat
import "../assets/js/crispchat.js";

// Navigation
import ReactGA from "react-ga";

ReactGA.initialize("UA-165932729-1");

if (process.browser) {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function Layout({children}) {
  console.log("flex-1 full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16");

  return (
    <>
      <AdBlockDetect>
        <></>
      </AdBlockDetect>
      <div className="font-sans">
        <Imports />
        <div className="flex flex-col min-h-screen font-sans">
          <Header />

          <main className="flex-1 full">{children}</main>

          <Footer />
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
