import React from "react";
import {MobileView} from "react-device-detect";
import {Link} from "gatsby";
import {Animated} from "react-animated-css";

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
            to="/donate"
            target="_blank"
            rel="noreferrer"
            className="pulse inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
          >
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div>
                <i className="fas fa-hand-holding-usd fa-lg text-green-700"></i>
              </div>
            </Animated>
          </Link>
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
