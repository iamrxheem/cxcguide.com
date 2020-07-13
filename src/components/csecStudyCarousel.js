import React from "react";
import Carousel from "react-multi-carousel";
import {useSpring, animated} from "react-spring";

const CsecStudyCarousel = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 3
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
      <>
        <Carousel
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          arrows={false}
          autoPlay={true}
          infinite
          autoPlaySpeed={6000}
          keyBoardControl={true}
          swipeable={true}
          draggable={true}
        >
          <div className="block h-full w-full bg-indigo-500 text-white text-center text-5xl text-center">
            <br />
            <h6>
              <animated.div style={props}>
                Start studying from home
              </animated.div>
            </h6>
            <br />
          </div>
          <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
            <br />
            <h6>
              <animated.div style={props}>
                Free online notes and exercises
              </animated.div>
            </h6>
            <br />
          </div>
          <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
            <br />
            <h6>
              <animated.div style={props}>
                Pass your exams like its nothing
              </animated.div>
            </h6>
            <br />
          </div>
        </Carousel>
      </>
    </>
  );
};

export default CsecStudyCarousel;
