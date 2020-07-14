import React from "react";
import {MobileView} from "react-device-detect";

class CSECStudyMiniNav extends React.Component {
  render() {
    return (
      <MobileView>
        <>
          <div className="flex flex-wrap justify-between px-3 pt-5">
            <nav className="sm:inline-block">
              <a
                href="/"
                className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block"
              >
                <i className="fas fa-search fa-lg"></i>
              </a>
              <a
                rel="noreferrer"
                href="https://www.instagram.com/cxcguide/"
                target="_blank"
                className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block md:inline-block ml-4"
              >
                <i
                  style={{color: "#8a3ab9"}}
                  className="fab fa-instagram fa-lg"
                ></i>
              </a>
            </nav>

            <nav className="sm:inline-block float-right">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
              >
                <i className="far fa-bookmark fa-lg"></i>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
              >
                <i className="fas fa-book fa-lg"></i>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block mr-6"
              >
                <i className="fas fa-user fa-lg"></i>
              </a>
              <a
                href="/store/a/top-picks"
                className="inline-block text-gray-700 no-underline lg:inline-block md:inline-block float-right"
              >
                <i className="fas fa-shopping-cart fa-lg"></i>
              </a>
            </nav>
          </div>
        </>
      </MobileView>
    );
  }
}

export default CSECStudyMiniNav;
