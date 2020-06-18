import React from "react";
import PropTypes from "prop-types";
import {CustomView} from "react-device-detect";

const AflTextbookCard = props => {
  const imgStyle = {
    height: "250px",
    width: "170px"
  };

  return (
    <>
      <CustomView condition={props.isSwipableView}>
        <li>
          <a rel="noreferrer" target="_blank" href={props.href}>
            <img
              style={imgStyle}
              className="rounded"
              src={props.imgScr}
              alt="image of textbook"
            />
          </a>
        </li>
      </CustomView>

      <CustomView condition={props.isSwipableView == false}>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={props.imgScr}
              alt="Image of textbook"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{props.title}</div>
              <p className="text-gray-700 text-base">{props.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{props.hastagOne}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{props.hastagTwo}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #{props.hastagThree}
              </span>

              <br />
              <br />
              <br />
              <a
                rel="noreferrer"
                target="_blank"
                href={props.href}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
              >
                Check it out
                <i className="fas fa-external-link-alt ml-3"></i>
              </a>
              <br />
              <br />
            </div>
          </div>
        </div>
      </CustomView>
    </>
  );
};

AflTextbookCard.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  price: PropTypes.string.isNotRequired,
  imgScr: PropTypes.string.isNotRequired,
  description: PropTypes.string.isNotRequired,
  hastagOne: PropTypes.string.isNotRequired,
  hastagTwo: PropTypes.string.isNotRequired,
  hastagThree: PropTypes.string.isNotRequired,
  isSwipableView: PropTypes.bool.isNotRequired
};

export default AflTextbookCard;
