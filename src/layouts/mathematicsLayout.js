import React from "react";
import {MobileView, BrowserView} from "react-device-detect";
import PropTypes from "prop-types";

const MathematicsLayout = props => {
  return (
    <>
      <>{props.children}</>

      <BrowserView>
        <></>
      </BrowserView>

      <MobileView>
        <></>
      </MobileView>
    </>
  );
};

MathematicsLayout.propTypes = {
  children: PropTypes.node
};

export default MathematicsLayout;
