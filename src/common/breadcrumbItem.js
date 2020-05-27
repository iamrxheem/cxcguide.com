import React from "react";
import PropTypes from "prop-types";

const BreadcrumbItem = props => {
  return (
    <>
      <li>
        <span className="mx-2 text-gray-600">/</span>
      </li>
      <li>
        <a href={props.href} className="text-gray-700">
          {props.title}
        </a>
      </li>
    </>
  );
};

BreadcrumbItem.propTypes = {
  title: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired
};

export default BreadcrumbItem;
