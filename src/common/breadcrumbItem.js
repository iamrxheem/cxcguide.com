import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types";

const BreadcrumbItem = props => {
  return (
    <>
      <li>
        <span className="mx-2 text-gray-600">/</span>
      </li>
      <li>
        <Link to={props.href} className="text-gray-700">
          {props.title}
        </Link>
      </li>
    </>
  );
};

BreadcrumbItem.propTypes = {
  title: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired
};

export default BreadcrumbItem;
