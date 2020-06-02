import React from "react";
import {MobileView} from "react-device-detect";

const MobileMenu = () => {
  return (
    <MobileView>
      <div className="flex flex-wrap justify-between px-10 pt-5">
        <nav className="sm:inline-block">
          <a
            href="/account"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-3"
          >
            <i className="fas fa-user fa-lg"></i>
          </a>
        </nav>

        <nav className="sm:inline-block float-right">
          <a
            href="/store"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block float-right clearfix"
          >
            <i className="fas fa-shopping-cart fa-lg"></i>
          </a>
        </nav>
      </div>
    </MobileView>
  );
};

export default MobileMenu;
