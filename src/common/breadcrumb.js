import React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";

const Breadcrumb = props => {
  return (
    <>
      <ol
        itemScope
        itemType="http://schema.org/BreadcrumbList"
        className="list-reset flex text-grey-dark bg-grey-light p-3 rounded font-sans w-full m-4"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <Link to="/">
            <span itemProp="name" className="text-blue-400">
              Home
            </span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {props.children}
      </ol>
    </>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

export default Breadcrumb;
