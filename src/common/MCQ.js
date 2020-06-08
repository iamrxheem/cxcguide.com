import PropTypes from "prop-types";
import React from "react";
import Carousel from "react-multi-carousel";
import {MobileView} from "react-device-detect";

const CustomRightArrow = ({onClick, ...rest}) => {
  const {
    onMove,
    carouselState: {currentSlide, deviceType}
  } = rest;

  console.log(deviceType);
  console.log(currentSlide);
  console.log(onMove);

  // onMove means if dragging or swiping in progress.
  return (
    <>
      <button id="next-button" onClick={() => onClick()}>
        Next
      </button>
    </>
  );
};

const MCQ = props => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 1
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div>
          <Carousel
            customLeftArrow={<CustomRightArrow />}
            ssr={true}
            responsive={responsive}
            infinite={true}
            arrows={true}
            partialVisible={false}
            swipeable={true}
            dots={true}
            showDots={false}
            keyBoardControl={false}
          >
            {props.children}
          </Carousel>
        </div>
        <div>
          <MobileView>
            <br />
          </MobileView>
          <div id="disqus_thread"></div>
        </div>
      </div>
    </>
  );
};

CustomRightArrow.propTypes = {
  onClick: PropTypes.func
};

MCQ.propTypes = {
  children: PropTypes.node.isRequired
};

export default MCQ;
