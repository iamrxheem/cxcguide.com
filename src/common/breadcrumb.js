import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types";

const Breadcrumb = props => {
  return (
    <>
      <nav className="bg-grey-light p-3 rounded font-sans w-full m-4">
        <ol className="list-reset flex text-grey-dark">
          <li>
            <Link to="/" className="text-blue-400">
              Home
            </Link>
          </li>
          {props.children}
        </ol>
      </nav>
    </>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

export default Breadcrumb;
