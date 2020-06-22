import React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";

const BreadcrumbItem = props => {
  return (
    <>
      <div>
        <span className="mx-2 text-gray-600">/</span>
      </div>
      <li
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <Link
          to={props.notLast ? props.href : ""}
          className={props.notLast ? "text-blue-400" : "text-gray-600"}
        >
          <span
            itemProp="name"
            className={props.notLast ? "text-blue-400" : ""}
          >
            {props.title}
          </span>
        </Link>
        <meta itemProp="position" content="" />
      </li>
    </>
  );
};

BreadcrumbItem.propTypes = {
  title: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
  notLast: PropTypes.node.isNotRequired
};

export default BreadcrumbItem;
