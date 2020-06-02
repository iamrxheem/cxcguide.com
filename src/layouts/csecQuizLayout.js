import React from "react";
import PropTypes from "prop-types";

const CSECQuizLayout = props => {
  return (
    <>
      <>
        <div className="flex md:flex-row-reverse flex-wrap">
          <div className="w-full md:w-3/5">
            <>{props.children}</>
          </div>
          <div className="w-full md:w-2/5">
            <ul>
              <li>English Langauge</li>
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

CSECQuizLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default CSECQuizLayout;
