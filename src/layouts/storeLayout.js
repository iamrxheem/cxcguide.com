import React from "react";
import PropTypes from "prop-types";

const StoreLayout = props => {
  return (
    <>
      <>{props.children}</>
    </>
  );
};

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoreLayout;
