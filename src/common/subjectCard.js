import React from "react";
import PropTypes from "prop-types";

const SubjectCard = props => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href={props.href}>
          <img
            style={{width: "100%", maxHeight: "200px"}}
            className="w-full"
            src={props.imgSrc}
            alt=""
          />
        </a>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>

          <br />
          <button
            href={props.href}
            className="bg-transparent rounded hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            View
          </button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

SubjectCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default SubjectCard;
