import React from "react";
import PropTypes from "prop-types";

const Audio = props => {
  return (
    <>
      <audio controls>
        <source src={props.src} />
      </audio>
    </>
  );
};

Audio.propTypes = {
  src: PropTypes.string.isRequired
};

export default Audio;
