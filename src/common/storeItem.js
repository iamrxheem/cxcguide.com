import React from "react";
import PropTypes from "prop-types";

const StoreItem = props => {
  return (
    <div className="p-1 pb-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={props.imgSrc} alt="image of product" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

StoreItem.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default StoreItem;
