import React from "react";
import PropTypes from "prop-types";
import FA from "react-fontawesome";

const PDFFile = props => (
  <a href={props.href} download>
    <FA name="file-pdf" style={{color: "#f00"}} />
    <span
      className="text-blue-700 hover:underline"
      style={{paddingLeft: "10px"}}
    >
      {props.title}
    </span>
  </a>
);

PDFFile.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default PDFFile;
