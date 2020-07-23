import React from "react";
import {MobileView} from "react-device-detect";
import {Link} from "gatsby";

const MobileMenu = () => {
  return (
    <MobileView>
      <div className="flex flex-wrap justify-between px-3 pt-5">
        <nav className="sm:inline-block">
          <Link
            to="/"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block"
          >
            <i className="fas fa-search fa-lg"></i>
          </Link>
        </nav>

        <nav className="sm:inline-block float-right">
          <Link
            to="/"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
          >
            <i className="fas fa-user fa-lg"></i>
          </Link>
          <Link
            to="/store/a/top-picks"
            className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block float-right"
          >
            <i className="fas fa-shopping-cart fa-lg"></i>
          </Link>
        </nav>
      </div>
    </MobileView>
  );
};

export default MobileMenu;
