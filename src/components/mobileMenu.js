import React from "react";
import {MobileView} from "react-device-detect";

const MobileMenu = () => {
  return (
    <MobileView>
      <div className="flex flex-wrap justify-between px-3 pt-5">
        <nav className="sm:inline-block">
          <a
            href="https://www.instagram.com/cxcguide/"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
          >
            <i className="fas fa-bars fa-lg"></i>
          </a>
          <a
            href="#"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block"
          >
            <i className="fas fa-search fa-lg"></i>
          </a>
        </nav>

        <nav className="sm:inline-block float-right">
          <a
            href="/discord"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
          >
            <i style={{color: "#738ADB"}} className="fab fa-discord fa-lg" />
          </a>
          <a
            href="https://www.instagram.com/cxcguide/"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
          >
            <i className="fas fa-user fa-lg"></i>
          </a>
          <a
            href="/store/afl/top-picks"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block float-right"
          >
            <i className="fas fa-shopping-cart fa-lg"></i>
          </a>
        </nav>
      </div>
    </MobileView>
  );
};

export default MobileMenu;
